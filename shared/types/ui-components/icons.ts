import type { SpritesMap } from "@/shared/uikit/icons/sprite.h";

export interface IconProps<Group extends keyof SpritesMap> {
  name: SpritesMap[Group];
  type: Group;
  w: number;
  h: number;
}
