$root = Resolve-Path "$PSScriptRoot\.."
$mongoExe = Join-Path $root 'tools\mongodb\mongodb-win32-x86_64-windows-6.0.17\bin\mongod.exe'
$dbPath = Join-Path $root 'data\db'
$logPath = Join-Path $root 'data\mongodb.log'
New-Item -ItemType Directory -Path $dbPath -Force | Out-Null
Write-Host "Starting MongoDB from $mongoExe"
Start-Process -FilePath $mongoExe -ArgumentList '--dbpath', $dbPath, '--bind_ip', '127.0.0.1', '--port', '27017', '--logpath', $logPath -NoNewWindow
Write-Host 'MongoDB start command issued.'
