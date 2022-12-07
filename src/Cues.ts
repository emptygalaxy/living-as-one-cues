import {LivingAsOneClient} from 'living-as-one-encoder';

export class Cues {
  private readonly client = new LivingAsOneClient();
  private history: string[] = [];

  /**
   * Log in to living as one
   * @param {string} userName
   * @param {string} password
   */
  public async login(userName: string, password: string) {
    return await this.client.login(userName, password);
  }

  /**
   * Check if name has been created before
   * @param {string} name
   * @return {boolean}
   */
  public wasCreatedBefore(name: string): boolean {
    return this.history.includes(name);
  }

  /**
   * Check if name has been created before
   * @param {string} name
   */
  public addToHistory(name: string) {
    this.history.push(name);
  }

  /**
   * Create cue and share if it is a new cue
   * @param {string} name
   */
  public async createAndShareIfNew(name: string) {
    const duplicate = this.wasCreatedBefore(name);
    return await this.create(name, !duplicate);
  }

  /**
   * Create cue
   * @param {string} name
   * @param {boolean} shared
   */
  public async create(name: string, shared = false) {
    this.addToHistory(name);
    return await this.client.cues.createLiveCue(name, shared);
  }
}
