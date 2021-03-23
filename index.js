

module.exports = (context, options)  => {
  options = Object.assign({ 
    usePresetEnv: true,
    useAsyncAwait: true,
    useDynamicImport: true,
    useClassProperties: true,
    useDecorators: true,
    pluginDecoratorsOptions: {
      legacy: true 
    },
    pluginClassPropertiesOptions: {
      loose: true 
    }
  }, options || {});

  const presets = [];
  const plugins = [];

  options.usePresetEnv && presets.push([require("@babel/preset-env"), options.presetEnvOptions]);
  options.useAsyncAwait && plugins.push([require('@babel/plugin-syntax-dynamic-import'), options.pluginAsyncAwaitOptions]);
  options.useDynamicImport && plugins.push([require('@babel/plugin-transform-async-to-generator'), options.pluginDynamicImportOptions]);
  options.useDecorators && plugins.push([require('@babel/plugin-proposal-decorators'), options.pluginDecoratorsOptions]);
  options.useClassProperties && plugins.push([require('@babel/plugin-proposal-class-properties'), options.pluginClassPropertiesOptions]);
  
  return {
    presets: presets,
    plugins: plugins
  }
};