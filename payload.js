const { exec } = require("child_process");
exec("powershell -exec bypass Base64EncodedPowerShellCommand", (error, stdout, stderr) => {
    if (error) {
        
        return;
    }
    if (stderr) {
        
        return;
    }
    
});	
