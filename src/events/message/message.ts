/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */

import { Client, Message } from 'discord.js';
import EventStructure from '../../structures/EventStructure';

export default class message extends EventStructure {
  client: Client;

  events: string[];

  constructor(client: Client) {
    super(client, ['message']);
    this.client = client;
  }

  run(message: Message): void {
    const prefix = '!';

    if (
      !message.author.bot
      && message.channel.type === 'text'
      && message.content.startsWith(prefix)
    ) {
      const messageArray = message.content.split(' ');
      const command = messageArray[0];
      const args = messageArray.slice(1);
      // @ts-ignore
      const commandFile = this.client.commands.get(command.slice(prefix.length));
      if (commandFile) {
        commandFile.setMessage(message);
        commandFile.setArgs(args);
        commandFile.run(message, args);
      }
    }
  }
}
