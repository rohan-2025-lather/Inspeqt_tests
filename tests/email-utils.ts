import Imap from 'node-imap';
import { simpleParser } from 'mailparser';
import dotenv from 'dotenv';
interface Email {
    subject: string;
    from: string;
    body: string;
}

dotenv.config()
export async function fetchLatestEmail(): Promise<Email> {
    return new Promise((resolve, reject) => {
        const imap = new Imap({
            user: process.env.IMAP_USER,
            password: process.env.IMAP_APP_PASSWORD,  
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
        });

        imap.once('ready', () => {
            imap.openBox('INBOX', true, (err) => {
                if (err) return reject(err);  

                imap.search(['ALL'], (err, results) => {
                    if (err) return reject(err);

                    if (results.length === 0) return reject(new Error('No emails found.')); 

                    const latestEmailId = results[results.length - 1];
                    const fetch = imap.fetch(latestEmailId, { bodies: '' });

                    fetch.on('message', (msg) => {
                        msg.on('body', (stream) => {
                            simpleParser(stream, (err, parsed) => {
                                if (err) return reject(err);

                                resolve({
                                    subject: parsed.subject || '',
                                    from: parsed.from?.text || '',
                                    body: parsed.text || '',
                                });

                                imap.end(); 
                            });
                        });
                    });

                    fetch.once('error', (err) => reject(err));
                    fetch.once('end', () => imap.end());
                });
            });
        });

        imap.once('error', (err) => reject(err));
        imap.connect();
    });
}
