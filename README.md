# DMP - Discord Malware Persistence  
Persistent code execution in Discord through internal file modification.

## 🚀 Overview  
DMP exploits Discord's internal Node.js modules to inject persistent code. This code executes whenever Discord is launched or manually refreshed using `CTRL + R`.  

🔍 **Tested Environment:**  
- **Operating System:** Windows 10  
- **Application:** Discord (Desktop App)  

## 🛠 How It Works  
The script modifies Discord’s internal Electron-based files, embedding itself into the application's startup routine. This method ensures that the payload executes whenever Discord starts or reloads.  

> ⚠ **Note:** This persistence method is limited to the Discord application and does not affect the web version.  

## 📖 Want to Learn More?  
For an in-depth breakdown, check out my article on Medium:  
🔗 [Malware Persistence Using Discord](https://0mrr00t0.medium.com/malware-persistence-using-discord-1928760532b7)  

## ⚠️ Disclaimer  
This project is intended for **educational and research purposes only**. It is not designed for unauthorized use on any system.  
By using this code, you agree that you hold full responsibility for any ethical and legal implications. The maintainers of this project do not endorse or condone illegal activities.  
