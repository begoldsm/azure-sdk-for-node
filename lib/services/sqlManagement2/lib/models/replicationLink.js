/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ReplicationLink class.
 * @constructor
 * Represents a database replication link.
 *
 * @member {string} [location] Location of the server that contains this
 * firewall rule.
 *
 * @member {string} [type] Type of resource this is.
 *
 * @member {boolean} [isTerminationAllowed] Legacy value indicating whether
 * termination is allowed.  Currently always returns true.
 *
 * @member {string} [replicationMode] Replication mode of this replication
 * link.
 *
 * @member {string} [partnerServer] The name of the server hosting the partner
 * database.
 *
 * @member {string} [partnerDatabase] The name of the partner database.
 *
 * @member {string} [partnerLocation] The Azure Region of the partner database.
 *
 * @member {string} [role] The role of the database in the replication link.
 * Possible values include: 'Primary', 'Secondary', 'NonReadableSecondary',
 * 'Source', 'Copy'
 *
 * @member {string} [partnerRole] The role of the partner database in the
 * replication link. Possible values include: 'Primary', 'Secondary',
 * 'NonReadableSecondary', 'Source', 'Copy'
 *
 * @member {date} [startTime] The start time for the replication link.
 *
 * @member {number} [percentComplete] The percentage of seeding complete for
 * the replication link.
 *
 * @member {string} [replicationState] The replication state for the
 * replication link. Possible values include: 'PENDING', 'SEEDING', 'CATCH_UP',
 * 'SUSPENDED'
 *
 */
class ReplicationLink extends models['SubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReplicationLink
   *
   * @returns {object} metadata of ReplicationLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReplicationLink',
      type: {
        name: 'Composite',
        className: 'ReplicationLink',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          isTerminationAllowed: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isTerminationAllowed',
            type: {
              name: 'Boolean'
            }
          },
          replicationMode: {
            required: false,
            readOnly: true,
            serializedName: 'properties.replicationMode',
            type: {
              name: 'String'
            }
          },
          partnerServer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.partnerServer',
            type: {
              name: 'String'
            }
          },
          partnerDatabase: {
            required: false,
            readOnly: true,
            serializedName: 'properties.partnerDatabase',
            type: {
              name: 'String'
            }
          },
          partnerLocation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.partnerLocation',
            type: {
              name: 'String'
            }
          },
          role: {
            required: false,
            readOnly: true,
            serializedName: 'properties.role',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary', 'NonReadableSecondary', 'Source', 'Copy' ]
            }
          },
          partnerRole: {
            required: false,
            readOnly: true,
            serializedName: 'properties.partnerRole',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary', 'NonReadableSecondary', 'Source', 'Copy' ]
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          percentComplete: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentComplete',
            type: {
              name: 'Number'
            }
          },
          replicationState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.replicationState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReplicationLink;