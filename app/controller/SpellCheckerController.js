
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
        Ext.Viewport.setMasked({xtype:'loadmask',message:'Correcting'});
        var task = Ext.create('Ext.util.DelayedTask', function () {
           Ext.Viewport.setMasked(false);
        });
        task.delay(2000);
    }
});
