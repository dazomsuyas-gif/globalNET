const { execSync } = require('child_process');
try {
  const output = execSync('gh pr create --title "blackboxai/deploy-globalnet" --body "Complete phases 6-14 for deployment to Vercel and Netlify"', {
    encoding: 'utf8',
    shell: 'cmd.exe'
  });
  console.log(output);
} catch (e) {
  console.log('GitHub CLI auth needed');
  console.log('Please run: gh auth login');
}
