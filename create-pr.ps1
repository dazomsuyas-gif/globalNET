$token = ""
$headers = @{
    "Accept" = "application/vnd.github+json"
    "Authorization" = "Bearer $token"
    "X-GitHub-Api-Version" = "2022-11-28"
}
$body = @{
    title = "blackboxai/deploy-globalnet"
    body = "Complete phases 6-14: Add entertainment, politics pages; Add netlify.toml for deployment"
    head = "main"
    base = "main"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.github.com/repos/dazom/globalNET/pulls" -Method Post -Headers $headers -Body $body
