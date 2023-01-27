import random
import string
import yagmail


def generate_random_string(length: int) -> str:
    symbols = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(symbols) for _ in range(length))




def send_email_fr(first_name, last_name, email, password):
    # Create the email message
    message = f"Merci d'avoir été bénévole pour notre événement, {first_name} {last_name}. Veuillez vous connecter à notre plateforme en utilisant les informations de connexion suivantes:\n\nEmail: {email}\nMot de passe: {password}\n\nMerci!"

    # Connect to the Gmail server
    yag = yagmail.SMTP("flack.media.benevola@gmail.com", "1234Test")

    # Send the email
    yag.send(
        email,
        "Informations de connexion bénévole",
        message
    )

