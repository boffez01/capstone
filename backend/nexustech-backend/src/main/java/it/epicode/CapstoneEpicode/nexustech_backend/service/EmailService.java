package it.epicode.CapstoneEpicode.nexustech_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${mail.from.address}")
    private String mailFromAddress;

    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFromAddress);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    public void sendContactEmail(String senderName, String senderEmail, String subject, String messageContent) {
        String toAdmin = fromEmail;
        String emailSubject = "Nuovo Messaggio da Form Contatti: " + subject;
        String emailBody = String.format(
                "Hai ricevuto un nuovo messaggio dal form di contatto del sito:\n\n" +
                        "Nome: %s\n" +
                        "Email: %s\n" +
                        "Oggetto: %s\n" +
                        "Messaggio:\n%s",
                senderName, senderEmail, subject, messageContent
        );

        sendEmail(toAdmin, emailSubject, emailBody);
    }
}