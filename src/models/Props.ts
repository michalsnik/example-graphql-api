export class Props {
  constructor(
    private text: string,
    private votes: number,
    private id?: number,
  ) {}

  get getText(): string {
    return this.text;
  }

  get getVotes(): number {
    return this.votes;
  }

  get getId(): number {
    return this.id;
  }
}
