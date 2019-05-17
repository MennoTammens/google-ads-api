module.exports = {
    name: 'OperatingSystemVersionConstant',
    object: {
        id: { _type: 'int64', _description: 'The ID of the operating system version.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the operating system version constant. Operating system version constant resource names have the form: <code>operatingSystemVersionConstants/{criterion_id}</code>',
        },
        operator_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'EQUALS_TO', description: 'Equals to the specified version.' },
                { s: 'GREATER_THAN_EQUALS_TO', description: 'Greater than or equals to the specified version.' },
            ],
            _description: 'Determines whether this constant represents a single version or a range of versions.',
        },
        os_major_version: { _type: 'int32', _description: 'The OS Major Version number.' },
        os_minor_version: { _type: 'int32', _description: 'The OS Minor Version number.' },
        name: { _type: 'string', _description: 'Name of the operating system.' },
    },
    methods: ['get', 'list'],
}
