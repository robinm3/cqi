import random
import string
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


def generate_random_string(length: int) -> str:
    symbols = string.ascii_letters + string.digits
    return ''.join(random.choice(symbols) for _ in range(length))




def send_email_fr(content, subject,  email):
    message = Mail(
        from_email='',
        to_emails=email,
        subject=subject,
        html_content=content)
    sg = SendGridAPIClient("")
    response = sg.send(message)




