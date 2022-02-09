export type SonolusResourceLocator = {
  type:
    | 'SkinData'
    | 'EngineThumbnail'
    | 'EffectData'
    | 'SkinTexture'
    | 'ParticleData'
    | 'EffectThumbnail'
    | 'LevelBgm'
    | 'BackgroundThumbnail'
    | 'EngineConfiguration'
    | 'LevelData'
    | 'LevelPreview'
    | 'ParticleTexture'
    | 'BackgroundData'
    | 'EngineData'
    | 'BackgroundImage'
    | 'LevelCover'
    | 'SkinThumbnail'
    | 'ParticleThumbnail'
    | 'BackgroundConfiguration';
  hash: string;
  url: string;
};
