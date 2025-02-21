import Imap from 'node-imap';
import { simpleParser } from 'mailparser';

export async function fetchLatestEmail(): Promise<string | null> {
    return new Promise((resolve, reject) => {
        const imap = new Imap({
            user: 'rohan2010lather@gmail.com',
            password: 'blxu afgw uxoj nfhv', // Use your actual app password
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
        });

        imap.once('ready', () => {
            imap.openBox('INBOX', true, (err) => {
                if (err) return reject(err);

                imap.search(['ALL'], (err, results) => {
                    if (err || results.length === 0) return reject(err || new Error("No emails found"));

                    const latestEmailId = results[results.length - 1];
                    const fetch = imap.fetch(latestEmailId, { bodies: '' });

                    fetch.on('message', (msg) => {
                        msg.on('body', (stream) => {
                            simpleParser(stream, (err, parsed) => {
                                if (err) return reject(err);

                                const htmlBody = parsed.html || ''; // Get the HTML content
                                const linkMatch = htmlBody.match(/href=["'](https?:\/\/[^"']+)["']/); // Extract the first link

                                if (linkMatch && linkMatch[1]) {
                                    resolve(linkMatch[1]); // Return the extracted link
                                } else {
                                    resolve(null); // No link found
                                }
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
