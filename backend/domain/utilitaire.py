import random
import string
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


def generate_random_string(length: int) -> str:
    symbols = string.ascii_letters + string.digits
    return ''.join(random.choice(symbols) for _ in range(length))




def send_email_fr(first_name, last_name, email, password):
    messagetext = f"<span>Merci d'avoir été bénévole pour notre événement, {first_name} {last_name}. Veuillez vous connecter à notre plateforme en utilisant les informations de connexion suivantes:\n\nEmail: {email}\nMot de passe: {password}\n\nMerci!</span>"

    message = Mail(
        from_email='marcanthony.girard.protic@gmail.com',
        to_emails=email,
        subject='Sending with Twilio SendGrid is Fun',
        html_content=messagetext)
    sg = SendGridAPIClient("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")
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)



