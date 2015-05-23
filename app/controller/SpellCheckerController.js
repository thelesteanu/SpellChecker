Ext.define('SpellChecker.controller.SpellCheckerController', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        views: [
            'SpellChecker.view.Main'
        ],
        refs: {
            main: 'main'
        },
        control: {
            main: {
                'analyzeText': 'analyzeText'
            }
        }
    },
    analyzeText: function (textArea) {
        Ext.Viewport.setMasked({xtype: 'loadmask', message: 'Correcting'});
        var value = textArea.getValue();
        value = value.replace(/s/g, 'ş');
        var task = Ext.create('Ext.util.DelayedTask', function () {
            textArea.setValue(value);
            Ext.Viewport.setMasked(false);
        });
        task.delay(2000);


        /*
         var self = this;
         Ext.Ajax.request({
         url: 'myUrl',

         params: {
            query:value,
            range:self.getMain().down('#searchRange').getValue()
         },

         callback: function(options, success, response) {
            textArea.setValue(response.responseText)
            Ext.Viewport.setMasked(false);
         }
         });*/
    }
});
