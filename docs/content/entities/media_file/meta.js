module.exports = {
    name: 'MediaFile',
    object: {
        id: { _type: 'int64', _description: 'The ID of the media file.' },
        file_size: { _type: 'int64', _description: 'The size of the media file in bytes.' },
        mime_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The mime type has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'IMAGE_JPEG', description: 'MIME type of image/jpeg.' },
                { s: 'IMAGE_GIF', description: 'MIME type of image/gif.' },
                { s: 'IMAGE_PNG', description: 'MIME type of image/png.' },
                { s: 'FLASH', description: 'MIME type of application/x-shockwave-flash.' },
                { s: 'TEXT_HTML', description: 'MIME type of text/html.' },
                { s: 'PDF', description: 'MIME type of application/pdf.' },
                { s: 'MSWORD', description: 'MIME type of application/msword.' },
                { s: 'MSEXCEL', description: 'MIME type of application/vnd.ms-excel.' },
                { s: 'RTF', description: 'MIME type of application/rtf.' },
                { s: 'AUDIO_WAV', description: 'MIME type of audio/wav.' },
                { s: 'AUDIO_MP3', description: 'MIME type of audio/mp3.' },
                { s: 'HTML5_AD_ZIP', description: 'MIME type of application/x-html5-ad-zip.' },
            ],
            _description: 'The mime type of the media file.',
        },
        media_bundle: { data: { _type: 'byte', _description: 'Raw zipped data.' }, _oneof: 'mediatype' },
        source_url: {
            _type: 'string',
            _description: 'The URL of where the original media file was downloaded from (or a file name).',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the media file. Media file resource names have the form: <code>customers/{customer_id}/mediaFiles/{media_file_id}</code>',
        },
        video: {
            ad_duration_millis: { _type: 'int64', _description: 'The duration of the Video in milliseconds.' },
            advertising_id_code: {
                _type: 'string',
                _description:
                    'The Advertising Digital Identification code for this video, as defined by the American Association of Advertising Agencies, used mainly for television commercials.',
            },
            isci_code: {
                _type: 'string',
                _description:
                    'The Industry Standard Commercial Identifier code for this video, used mainly for television commercials.',
            },
            youtube_video_id: { _type: 'string', _description: 'The YouTube video ID (as seen in YouTube URLs).' },
            _oneof: 'mediatype',
        },
        image: { data: { _type: 'byte', _description: 'Raw image data.' }, _oneof: 'mediatype' },
        audio: {
            ad_duration_millis: { _type: 'int64', _description: 'The duration of the Audio in milliseconds.' },
            _oneof: 'mediatype',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the media file. The name can be used by clients to help identify previously uploaded media.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The media type has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'IMAGE', description: 'Static image, used for image ad.' },
                { s: 'ICON', description: 'Small image, used for map ad.' },
                { s: 'MEDIA_BUNDLE', description: 'ZIP file, used in fields of template ads.' },
                { s: 'AUDIO', description: 'Audio file.' },
                { s: 'VIDEO', description: 'Video file.' },
                { s: 'DYNAMIC_IMAGE', description: 'Animated image, such as animated GIF.' },
            ],
            _description: 'Type of the media file.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
