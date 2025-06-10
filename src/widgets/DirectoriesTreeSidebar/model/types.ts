export interface ITreeDirectoryStrategy {
  render(dataList: any[]): React.FC;
}

export interface IDirectoryTreeCoordinator {
  get(name: string, dataList: any[]): ITreeDirectoryStrategy | undefined;
}
