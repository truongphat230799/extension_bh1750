Blockly.Blocks['yolobit_bh1750_setup'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "yolobit_bh1750_setup",
            "message0": "cường độ ánh sáng (lux)",
            "output": null,
            "colour": "#33aaaa",
            "tooltip": "",
            "helpUrl": ""
        }
      );
    }
};

Blockly.Python['yolobit_bh1750_setup'] = function(block) {
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
    Blockly.Python.definitions_["import_bh1750"] = "from bh1750 import BH1750";
    Blockly.Python.definitions_["import_create_mlx90614"] = "s = BH1750(SoftI2C(scl=Pin(22), sda=Pin(21), freq =100000))";
    // TODO: Assemble Python into code variable.
    var code = 'round(s.luminance(BH1750.ONCE_HIRES_1),1)';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
