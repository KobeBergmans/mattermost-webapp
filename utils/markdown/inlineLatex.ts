// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import katex from 'katex';

export function markedInlineLatex(markedIn: string): string {
    let outHtml = '';
    let src = markedIn.slice();

    while (src.length > 0) {
        //Find text segments
        const startPIndex = src.indexOf('<p>');

        if (startPIndex === -1) {
            break;
        }

        outHtml += src.slice(0, startPIndex);

        const endPIndex = src.indexOf('</p>', startPIndex);
        let inBlock = src.slice(startPIndex, endPIndex + '</p>'.length);
        src = src.slice(endPIndex + '</p>'.length + 1); //Next iteration of outer loop goes on after this p segment

        //In Textblock modifying
        let startLatexIndex = inBlock.indexOf('$');
        while (startLatexIndex !== -1) {
            const nextLatexIndex = inBlock.indexOf('$', startLatexIndex + 1); //Start searching after the first index

            if (nextLatexIndex === -1) {
                outHtml += inBlock;
                break;
            } else if (nextLatexIndex === startLatexIndex + 1) { //Don't render in latex if there is nothing in between the dollar signs. But only ignore the first dollar sign
                outHtml += inBlock.slice(0, nextLatexIndex);
                inBlock = inBlock.slice(nextLatexIndex);
                startLatexIndex = inBlock.indexOf('$');
                continue;
            }
            const latexCode = inBlock.slice(startLatexIndex + 1, nextLatexIndex);
            const katexHtml = inlineLatexRenderer(latexCode);

            outHtml += inBlock.slice(0, startLatexIndex);
            outHtml += katexHtml;
            inBlock = inBlock.slice(nextLatexIndex + 1);

            startLatexIndex = inBlock.indexOf('$');
        }

        outHtml += inBlock;
    }

    return outHtml + src;
}

function inlineLatexRenderer(code: string): string {
    try {
        const katexOptions = {
            throwOnError: false,
            displaymode: false,
            maxSize: 200,
            maxExpand: 100,
        };

        return katex.renderToString(code, katexOptions); //Render everything except the dolar signs and escape text
    } catch (error) {
        return '<span className=\'post-body--code tex\'>' +
          '<FormattedMessage id=\'katex.error\' defaultMessage="Couldn\'t compile your Latex code. Please review the syntax and try again."/>' +
          '</span>';
    }
}
