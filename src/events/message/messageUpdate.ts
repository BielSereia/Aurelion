/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { Client, Message } from 'discord.js';
import EventStructure from '../../structures/EventStructure';

export default class messageUpdate extends EventStructure {
  client: Client;

  events: string[];

  constructor(client: Client) {
    super(client, ['messageUpdate']);
    this.client = client;
  }

  run(oldMessage: Message, newMessage: Message): void {
    this.client.emit('message', newMessage);
  }
}
