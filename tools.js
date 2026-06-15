// Global variable holding the cyber security tools data
window.toolsData = [
  {
    name: "Hydra [Terminal]",
    category: "terminal",
    description: "A fast network login hacking tool used to test password strength.",
    installation: "Available in Kali Linux. For Termux type: apt install hydra",
    command: "hydra -l admin -P passwords.txt ssh://192.168.1.1"
  },
  {
    name: "SQLmap [Linux]",
    category: "linux",
    description: "An automatic tool used to find and exploit SQL injection vulnerabilities.",
    installation: "git clone https://github.com/sqlmapproject/sqlmap.git",
    command: "python sqlmap.py -u 'http://example.com/page.php?id=1' --dbs"
  },

{
    name: "John the Ripper [Terminal]",
    category: "terminal",
    description: "A fast and highly customizable password cracking tool used to detect weak passwords and audit system security through dictionary attacks.",
    installation: "Available in Kali Linux. For Termux/Ubuntu type: apt install john",
    command: "john --wordlist=passwords.txt hash.txt"
},
{
    name: "Hashcat [Terminal]",
    category: "terminal",
    description: "An advanced, world-fastest rule-based hash cracking utility that supports multiple hashing algorithms like MD5, SHA-1, and bcrypt.",
    installation: "Pre-installed in security environments. Install via: apt install hashcat",
    command: "hashcat -m 0 -a 0 target_hash.txt dictionary.txt"
},
{
    name: "Crunch [Terminal]",
    category: "terminal",
    description: "A powerful wordlist generator where you can specify standard character sets or custom patterns to build robust dictionaries for testing.",
    installation: "To install on standard terminals or Termux type: apt install crunch",
    command: "crunch 6 8 abcdef123 -o custom_wordlist.txt"
},
{
    name: "Cupp [Terminal]",
    category: "terminal",
    description: "An automated password profiling tool that generates highly targeted wordlists based on a specific target's personal information like birthdates, nicknames, and hobbies.",
    installation: "git clone https://github.com/Mebus/cupp.git",
    command: "python3 cupp.py -i"
},
{
    name: "Medusa [Terminal]",
    category: "terminal",
    description: "A speedy, parallel, and modular security auditing tool designed to brute-force network authentication logs across multiple remote services simultaneously.",
    installation: "Available in security repositories. Install via: apt install medusa",
    command: "medusa -h 192.168.1.1 -u admin -P passwords.txt -M ssh"
},
{
    name: "Ncrack [Terminal]",
    category: "terminal",
    description: "A high-speed network authentication cracking tool built for enterprise security testing, helping auditors find weak credentials across massive networks.",
    installation: "To install on Linux or Termux environments type: apt install ncrack",
    command: "ncrack --user admin -P passwords.txt ftp://192.168.1.5"
},

{
    name: "Whois [Terminal]",
    category: "terminal",
    description: "A command-line utility used to query databases that store the registered users or assignees of an Internet resource, such as a domain name or an IP address block.",
    installation: "Pre-installed on most systems. For Termux/Ubuntu: apt install whois",
    command: "whois google.com"
},
{
    name: "TheHarvester [Terminal]",
    category: "terminal",
    description: "A tool designed to gather public search engine data, emails, subdomains, and hostnames linked to a specific corporate domain for penetration testing.",
    installation: "Available in Kali Linux. Install via: apt install theharvester",
    command: "theHarvester -d example.com -l 500 -b google"
},
{
    name: "Nmap [Terminal]",
    category: "terminal",
    description: "An open-source network mapper used for security auditing, network discovery, and identifying active hosts and open ports on a system.",
    installation: "To install on standard terminals or Termux: apt install nmap",
    command: "nmap -v -A 192.168.1.1"
},
  {
    name: "Dns-Recon [Terminal]",
    category: "terminal",
    description: "A tool used by network administrators to check and audit DNS records and domain configurations to ensure proper setup.",
    installation: "Available in security repositories. For standard Linux: apt install dnsrecon",
    command: "dnsrecon -d example.com"
},
{
    name: "Sherlock-Finder [Terminal]",
    category: "terminal",
    description: "An open-source profile locator tool that helps users search for missing public account names across multiple social websites.",
    installation: "git clone https://github.com/sherlock-project/sherlock.git",
    command: "python3 sherlock.py username_here"
},
{
    name: "Amass-Asset [Terminal]",
    category: "terminal",
    description: "An asset discovery tool that helps organization mapping by compiling public data records to view overall digital presence.",
    installation: "To install on standard terminals or Linux: apt install amass",
    command: "amass enum -d example.com"
}
  ];
