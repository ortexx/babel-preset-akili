
module.exports = (context, options)  => {
  options = Object.assign({ 
    usePresetEnv: true,
    usePresetStage2: true,
    usePresetStage3: true
  }, options || {});

  const presets = [];

  options.usePresetEnv && presets.push([require("babel-preset-env"), options.presetEnvOptions]);
  options.usePresetStage2 && presets.push([require("babel-preset-stage-2"), options.presetStage2Options]);
  options.usePresetStage3 && presets.push([require("babel-preset-stage-3", options.presetStage3Options)]);
  
  return {
    presets: presets
  }  
};