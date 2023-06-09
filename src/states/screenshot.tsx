import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const screenshotState = atom<string | null>({
  key: 'screenshotState',
  default: null,
});

export function useScreenshot() {
  return useRecoilValue(screenshotState);
}

export function useSetScreenshot() {
  return useSetRecoilState(screenshotState);
}
