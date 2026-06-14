const toolsData = [
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
  }
];
