import tkinter as tk
from tkinter import messagebox
import threading
import json

class App:
    def __init__(self, root):
        self.root = root
        self.mostrandoLar = False
        self.mostrandoEmpresa = False
        self.currentSlide = 0
        self.slides = []
        self.indicators = []
        self.intervalId = None

        self.setup_ui()
        self.start_slideshow()

    def setup_ui(self):
        self.root.title("Carousel and Sections")
        self.root.geometry("600x400")

        # Slides setup
        colors = ['red', 'green', 'blue']
        for color in colors:
            slide = tk.Frame(self.root, bg=color, width=600, height=200)
            slide.place(x=0, y=0)
            slide.lower()
            self.slides.append(slide)

            indicator = tk.Label(self.root, text='•', font=('Arial', 24))
            indicator.pack(side=tk.LEFT)
            self.indicators.append(indicator)

        self.slides[0].lift()
        self.indicators[0].config(fg='black')

        # Buttons to control slides
        tk.Button(self.root, text="Previous Slide", command=self.prev_slide).pack(side=tk.LEFT)
        tk.Button(self.root, text="Next Slide", command=self.next_slide).pack(side=tk.LEFT)

        # Sections for 'Lar' and 'Empresa'
        self.larSection = tk.Frame(self.root, bg='lightblue', width=600, height=200)
        self.empresaSection = tk.Frame(self.root, bg='lightgreen', width=600, height=200)

        tk.Button(self.root, text="Show Lar", command=self.show_lar).pack(side=tk.LEFT)
        tk.Button(self.root, text="Show Empresa", command=self.show_empresa).pack(side=tk.LEFT)

        # Password validation setup
        self.passwordInput = tk.Entry(self.root, show='*')
        self.passwordInput.pack()
        self.passwordInput.bind('<KeyRelease>', self.validate_password)

        self.lengthRequirement = tk.Label(self.root, text="At least 8 characters ❌")
        self.lengthRequirement.pack()
        self.digitRequirement = tk.Label(self.root, text="At least one digit ❌")
        self.digitRequirement.pack()
        self.nonDigitRequirement = tk.Label(self.root, text="At least one non-digit ❌")
        self.nonDigitRequirement.pack()

        tk.Button(self.root, text="Validate Password", command=self.validar_senha).pack()

    def start_slideshow(self):
        self.intervalId = threading.Timer(5, self.change_slide)
        self.intervalId.start()

    def change_slide(self):
        self.slides[self.currentSlide].lower()
        self.indicators[self.currentSlide].config(fg='grey')

        self.currentSlide = (self.currentSlide + 1) % len(self.slides)

        self.slides[self.currentSlide].lift()
        self.indicators[self.currentSlide].config(fg='black')

        self.start_slideshow()

    def prev_slide(self):
        if self.intervalId:
            self.intervalId.cancel()
        self.slides[self.currentSlide].lower()
        self.indicators[self.currentSlide].config(fg='grey')

        self.currentSlide = (self.currentSlide - 1) % len(self.slides)

        self.slides[self.currentSlide].lift()
        self.indicators[self.currentSlide].config(fg='black')

        self.start_slideshow()

    def next_slide(self):
        if self.intervalId:
            self.intervalId.cancel()
        self.change_slide()

    def show_lar(self):
        if self.mostrandoLar:
            self.larSection.lower()
            self.mostrandoLar = False
        else:
            self.larSection.lift()
            self.empresaSection.lower()
            self.mostrandoLar = True
            self.mostrandoEmpresa = False

    def show_empresa(self):
        if self.mostrandoEmpresa:
            self.empresaSection.lower()
            self.mostrandoEmpresa = False
        else:
            self.empresaSection.lift()
            self.larSection.lower()
            self.mostrandoEmpresa = True
            self.mostrandoLar = False

    def validate_password(self, event):
        password = self.passwordInput.get()
        length_req = len(password) >= 8
        digit_req = any(char.isdigit() for char in password)
        non_digit_req = any(not char.isdigit() for char in password)

        self.lengthRequirement.config(text=f"At least 8 characters {'✅' if length_req else '❌'}")
        self.digitRequirement.config(text=f"At least one digit {'✅' if digit_req else '❌'}")
        self.nonDigitRequirement.config(text=f"At least one non-digit {'✅' if non_digit_req else '❌'}")

    def validar_senha(self):
        password = self.passwordInput.get()
        length_req = len(password) >= 8
        digit_req = any(char.isdigit() for char in password)
        non_digit_req = any(not char.isdigit() for char in password)

        if length_req and digit_req and non_digit_req:
            messagebox.showinfo("Success", "Password is valid! Proceeding to the next page.")
            # Implement redirection logic here
        else:
            messagebox.showerror("Error", "Please meet all password requirements before continuing.")

    def load_diaristas(self):
        try:
            with open('diaristas.json', 'r', encoding='utf-8') as f:
                diaristas = json.load(f)
            # Display diaristas information
            for diarista in diaristas:
                print(diarista)  # Replace with GUI display logic
        except Exception as e:
            print(f"Error loading diaristas: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
