# Deploy Landscape Investment Atlas to GitHub Pages
# Run after: gh auth login

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Checking GitHub authentication..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please run: gh auth login" -ForegroundColor Yellow
    exit 1
}

$repoName = "landscape-investment-atlas"
$user = gh api user -q .login
Write-Host "Logged in as: $user" -ForegroundColor Green

Copy-Item -Path website\* -Destination docs\ -Force

$hasRemote = $false
try {
    git remote get-url origin 2>$null | Out-Null
    $hasRemote = $true
} catch {}

if (-not $hasRemote) {
    Write-Host "Creating repository $repoName..." -ForegroundColor Cyan
    gh repo create $repoName --public `
        --description "Landscape Investment Atlas - decision support for landscape finance" `
        --source=. --remote=origin --push
} else {
    Write-Host "Pushing to origin..." -ForegroundColor Cyan
    git add -A
    $staged = git diff --cached --name-only
    if ($staged) { git commit -m "Update site for GitHub Pages" }
    git push -u origin main
}

Write-Host "Enabling GitHub Pages from /docs..." -ForegroundColor Cyan
$pagesBody = '{"source":{"branch":"main","path":"/docs"}}'
$pagesBody | gh api "repos/$user/$repoName/pages" -X PUT --input -
if ($LASTEXITCODE -ne 0) {
    gh api "repos/$user/$repoName/pages" -X POST -f build_type=legacy -f "source[branch]=main" -f "source[path]=/docs"
}

Write-Host ""
Write-Host "Done! Site will be live at:" -ForegroundColor Green
Write-Host "https://$user.github.io/$repoName/" -ForegroundColor Yellow
Write-Host "(Allow 1-2 minutes for GitHub Pages to build)"
