module.exports = (context, options)  => {
  options = Object.assign({ 
    usePresetEnv: true,
    useTransformAsync: true,
    useTransformRuntime: true,
    useDynamicImport: true,
    useClassProperties: true,
    useDecorators: true,
    pluginDecoratorsOptions: {
      legacy: true 
    }
  }, options || {});

  const presets = [];
  const plugins = [];

  options.usePresetEnv && presets.push([require("@babel/preset-env"), options.presetEnvOptions]);
  options.useTransformAsync && plugins.push([require('@babel/plugin-transform-async-to-generator'), options.pluginTransformAsyncOptions]);
  options.useTransformRuntime && plugins.push([require('@babel/plugin-transform-runtime'), options.pluginTransformRuntimeOptions]);  
  options.useDynamicImport && plugins.push([require('@babel/plugin-syntax-dynamic-import'), options.pluginDynamicImportOptions]);
  options.useDecorators && plugins.push([require('@babel/plugin-proposal-decorators'), options.pluginDecoratorsOptions]);
  options.useClassProperties && plugins.push([require('@babel/plugin-proposal-class-properties'), options.pluginClassPropertiesOptions]);
  
  return {
    presets: presets,
    plugins: plugins
  }
};