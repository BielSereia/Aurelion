/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable new-cap */
/* eslint-disable no-console */

import { PathLike, readdirSync, lstat } from 'fs';
import { Client, Collection } from 'discord.js';
import { join } from 'path';

export default class DiscordClient extends Client {
  commands: Collection<string, Function>;

  loadCommands(dir: PathLike): void {
    this.commands = new Collection();

    const files = readdirSync(dir);

    files.forEach(async (file) => {
      lstat(dir + file, async (error, stats) => {
        if (error) return console.log(error);
        if (stats.isFile()) {
          const command = new (await import(`${join(__dirname, '..', '..', `${dir}${file}`)}`)).default(this);
          this.commands.set(command.config.name, command);
        } else {
          this.loadCommands(`${dir + file}/`);
        }
      });
    });
  }

  loadEvents(dir: PathLike): void {
    const files = readdirSync(dir);

    files.forEach(async (file) => {
      lstat(dir + file, async (error, stats) => {
        if (error) return console.log(error);
        if (stats.isFile()) {
          const event = new (await import(`${join(__dirname, '..', '..', `${dir}${file}`)}`)).default(this);
          for (let i = 0; i < event.events.length; i += 1) {
            this.on(event.events[i], (...args) => event.run(...args));
          }
        } else {
          this.loadEvents(`${dir + file}/`);
        }
      });
    });
  }
}
