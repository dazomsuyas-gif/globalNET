$zip = 'mongodb-windows-x86_64-6.0.17.zip'
$url = "https://fastdl.mongodb.org/windows/$zip"
$out = Join-Path $PWD $zip
New-Item -ItemType Directory -Path "$PWD\tools\mongodb" -Force | Out-Null
Write-Host "Downloading $url"
Invoke-WebRequest -Uri $url -OutFile $out
Expand-Archive -Path $out -DestinationPath "$PWD\tools\mongodb" -Force
Remove-Item $out
Write-Host "Downloaded and extracted to $PWD\tools\mongodb"