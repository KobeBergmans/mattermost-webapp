// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import katex from 'katex';

export function markedInlineLatex(markedIn: string): string {
    let outHtml = '';
    let src = markedIn.slice();

    while (src.length > 0) {
        //Find text segments
        const nextTextIndex = src.indexOf('<p>');

        if (nextTextIndex === -1) {
            break;
        }

        outHtml += src.slice(0, nextTextIndex);
        src = src.slice(nextTextIndex);

        const startLatexIndex = src.indexOf('$');
        if (startLatexIndex !== -1) {
            const nextLatexIndex = src.indexOf('$', startLatexIndex + 1); //Start searching after the first index

            if (nextLatexIndex !== -1) {
                const latexCode = src.slice(startLatexIndex + 1, nextLatexIndex);
                const katexHtml = inlineLatexRenderer(latexCode);

                outHtml += src.slice(0, startLatexIndex);
                outHtml += '</p>';
                outHtml += katexHtml;

                src = '<p>' + src.slice(nextLatexIndex + 1);
                continue;
            }
        }

        return outHtml + src;
    }

    return outHtml;
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
