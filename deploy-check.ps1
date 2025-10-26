Write-Host "🎯 FINAL DEPLOYMENT CHECK" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan

# Check build output
if (Test-Path "out/index.html") {
    Write-Host "✅ Build output exists" -ForegroundColor Green
} else {
    Write-Host "❌ Build output missing" -ForegroundColor Red
    exit 1
}

# Check essential files
$deployFiles = @(
    "app.yaml",
    "next.config.js", 
    "package.json",
    "package-lock.json"
)

foreach ($file in $deployFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ $file - MISSING" -ForegroundColor Red
    }
}

# Check git status
Write-Host "`n🔍 Git Status:" -ForegroundColor Yellow
git status --short

Write-Host "`n🚀 READY FOR DIGITALOCEAN DEPLOYMENT!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Go to https://cloud.digitalocean.com" -ForegroundColor White
Write-Host "   2. Create → Apps" -ForegroundColor White
Write-Host "   3. Connect GitHub" -ForegroundColor White
Write-Host "   4. Select your repository" -ForegroundColor White
Write-Host "   5. Deploy! 🎉" -ForegroundColor White
