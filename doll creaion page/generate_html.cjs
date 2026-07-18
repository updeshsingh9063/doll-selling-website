const fs = require('fs');
const files = fs.readdirSync('public/assets/skylar-clean').filter(f => f.endsWith('.png'));
let html = '<html><body><h1>Skylar Images</h1><div style="display:flex;flex-wrap:wrap;">';
for(const f of files) {
  html += '<div style="margin:10px;text-align:center;"><img src="assets/skylar-clean/' + f + '" style="max-width:200px;max-height:200px;border:1px solid #ccc;"/><br/><span style="font-size:12px">' + f + '</span></div>';
}
html += '</div></body></html>';
fs.writeFileSync('public/test-images.html', html);
