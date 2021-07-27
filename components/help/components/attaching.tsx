// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';

export default function Attaching(): JSX.Element {
    return (
        <div>
            <h1 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.title'
                    defaultMessage='Attaching Files'
                />
            </h1>
            <hr/>
            <h2 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.methods.title'
                    defaultMessage='Attachment Methods'
                />
            </h2>
            <p>
                <FormattedMessage
                    id='help.attaching.methods.description'
                    defaultMessage='You have three ways to attach a file: dragging and dropping files, using the Attachment icon, or by copying and pasting files.'
                />
            </p>
            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.dragdrop.title'
                    defaultMessage='Drag and Drop Files'
                />
            </h4>
            <p>
                <FormattedMarkdownMessage
                    id='help.attaching.dragdrop.description'
                    defaultMessage='Upload a file, or a selection of files, by dragging the files from your computer into the right-hand sidebar or center pane. Dragging and dropping attaches the files to the message input box, then you can optionally type a message and press **ENTER** to post the message.'
                />
            </p>
            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.icon.title'
                    defaultMessage='Use the Attachment Icon'
                />
            </h4>
            <p>
                <FormattedMarkdownMessage
                    id='help.attaching.icon.description'
                    defaultMessage='Alternatively, upload files by selecting the **Attachment** icon inside the message input box. In the system file viewer, navigate to the desired files, then select **Open** to upload them to the message input box. Optionally type a message, then press **ENTER** to post the message.'
                />
            </p>
            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.pasting.title'
                    defaultMessage='Copy and Paste Files'
                />
            </h4>
            <p>
                <FormattedMessage
                    id='help.attaching.pasting.description'
                    defaultMessage='On Chrome and Edge browsers, you can upload files by pasting them from the system clipboard. This is not yet supported on other browsers.'
                />
            </p>

            <h2 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.previewer.title'
                    defaultMessage='View Previewer'
                />
            </h2>
            <p>
                <FormattedMessage
                    id='help.attaching.previewer.description'
                    defaultMessage='Mattermost has a built-in file previewer used to view media, download files, and to share public links. Select the thumbnail of an attached file to open it in the file previewer.'
                />
            </p>

            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.publicLinks.title'
                    defaultMessage='Share Public Links'
                />
            </h4>
            <p>
                <FormattedMarkdownMessage
                    id='help.attaching.publicLinks.description'
                    defaultMessage='Public links enable you to share file attachments with people outside your Mattermost team. Open the file previewer by selecting the thumbnail of an attachment, then select **Get a public link**. Copy the link provided. When the link is shared and opened by another user, the file automatically downloads.'
                />
            </p>
            <p>
                <FormattedMarkdownMessage
                    id='help.attaching.publicLinks2'
                    defaultMessage='If the **Get a public link** option is not visible in the file previewer, and you want this feature enabled, ask your System Admin to enable this feature in the System Console under **Site Configuration > Public Links**.'
                />
            </p>
            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.downloading.title'
                    defaultMessage='Download Files'
                />
            </h4>
            <p>
                <FormattedMarkdownMessage
                    id='help.attaching.downloading.description'
                    defaultMessage='Download an attached file by selecting the Download icon next to the file thumbnail, or by opening the file previewer and selecting **Download**.'
                />
            </p>
            <h4 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.supported.title'
                    defaultMessage='Supported Media Types'
                />
            </h4>
            <p>
                <FormattedMessage
                    id='help.attaching.supported.description'
                    defaultMessage='If you are trying to preview a media type that is not supported, the file previewer opens a standard media attachment icon. Supported media formats depend heavily on your browser and operating system. The following formats are supported by Mattermost on most browsers:'
                />
            </p>
            <ul>
                <li>
                    <FormattedMessage
                        id='help.attaching.supportedListItem1'
                        defaultMessage='Images: BMP, GIF, JPG, JPEG, PNG, SVG'
                    />
                </li>
                <li>
                    <FormattedMessage
                        id='help.attaching.supportedListItem2'
                        defaultMessage='Video: MP4'
                    />
                </li>
                <li>
                    <FormattedMessage
                        id='help.attaching.supportedListItem3'
                        defaultMessage='Audio: MP3, M4A'
                    />
                </li>
                <li>
                    <FormattedMessage
                        id='help.attaching.supportedListItem4'
                        defaultMessage='Documents: PDF, TXT'
                    />
                </li>
            </ul>
            <p>
                <FormattedMessage
                    id='help.attaching.notSupported'
                    defaultMessage='Other document formats (such as Word, Excel, or PPT) are not yet supported.'
                />
            </p>

            <h2 className='markdown__heading'>
                <FormattedMessage
                    id='help.attaching.limitations.title'
                    defaultMessage='File Size Limitations'
                />
            </h2>
            <p>
                <FormattedMessage
                    id='help.attaching.limitations.description'
                    defaultMessage='Mattermost supports up to five files attached per post. The default maximum file size is 100 MB (megabytes), but this can be changed by your System Admin. Image files can be a maximum size of 6048 pixels x 4032 pixels, or 24 MP (mega pixels), or a raw image file size of approximately 36 MB.'
                />
            </p>
            <p className='links'>
                <FormattedMessage
                    id='help.learnMore'
                    defaultMessage='Learn more about:'
                />
            </p>
            <ul>
                <li>
                    <Link to='/help/messaging'>
                        <FormattedMessage
                            id='help.link.messaging'
                            defaultMessage='Basic Messaging'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/composing'>
                        <FormattedMessage
                            id='help.link.composing'
                            defaultMessage='Composing Messages and Replies'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/mentioning'>
                        <FormattedMessage
                            id='help.link.mentioning'
                            defaultMessage='Mentioning Teammates'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/formatting'>
                        <FormattedMessage
                            id='help.link.formatting'
                            defaultMessage='Formatting Messages Using Markdown'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/commands'>
                        <FormattedMessage
                            id='help.link.commands'
                            defaultMessage='Executing Commands'
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
