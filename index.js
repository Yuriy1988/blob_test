var toBlob = (svgString) => new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
var string = '*\u0009Terms & Conditions: [[Terms]]';
var svgString = `
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            id="template-editor"
            width="816"
            height="1056"
            viewBox="0 0 816 1056"
        >
            <g>
                <text x="10" y="10">
                    <tspan>${string}</tspan>
                </text>
            </g>
        </svg>
      `;

document.body.innerHTML = svgString;
const ss = new XMLSerializer().serializeToString(document.body);
var blob = toBlob(ss);
var DOMURL = window.self.URL || window.self.webkitURL || window.self;
const blobUrl = DOMURL.createObjectURL(blob);
window.open(blobUrl);
