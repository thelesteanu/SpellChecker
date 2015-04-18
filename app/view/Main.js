Ext.define('SpellChecker.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
            layout: {
                pack: 'center'
            },
            defaults: {
                width: '30%'
            },
            iconAlign: 'left'
        },
        items: [
            {
                title: 'Spell Checker',
                iconCls: 'home',
                layout: 'fit',
                height: '100%',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Spell Checker',
                        items:{
                            iconCls:'home',
                            ui:'plain'
                        }
                    },
                    {
                        xtype: 'container',
                        height: '100%',
                        items: [
                            {
                                xtype: 'panel',
                                itemId: 'infoText',
                                styleHtmlContent: true,
                                html: '<div style="font-size:15px;text-align: center">Please insert below the text you want to correct.</div>'
                            },
                            {
                                xtype: 'textareafield',
                                height: '450px',
                                margin: '0px 20px 20px 20px',
                                listeners: {
                                    focus: function (textarea) {
                                        textarea.up().down('#infoText').setHidden(true);
                                    },
                                    blur: function (textarea) {
                                        textarea.up().down('#infoText').setHidden(false);
                                    },
                                    action: function (textarea) {
                                        SpellChecker.app.getController('SpellCheckerController').analyzeText(textarea);
                                    }
                                }

                            },
                            {
                                xtype: 'button',
                                ui: 'action',
                                margin: '10px',
                                padding: '20px',
                                docked: 'bottom',
                                text: 'Check Text',
                                handler: function (btn) {
                                    SpellChecker.app.getController('SpellCheckerController').analyzeText(btn.up().down('textareafield'));
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                scrollable: true,
                xtype: 'container',
                layout: 'fit',
                height: '100%',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Settings',
                        items:{
                            iconCls:'settings',
                            ui:'plain'
                        }
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'fieldset',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'spinnerfield',
                                        name: 'searchRange',
                                        minValue: 5,
                                        maxValue: 15,
                                        stepValue: 1,
                                        cycle: true,
                                        label: 'Range',
                                        value: 7
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        name: 'offline',
                                        label: 'Offline',
                                        checked: false
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                docked: 'bottom',
                                text: 'Save Settings',
                                padding: '16px',
                                margin: '20px',
                                ui: 'action'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'About us',
                iconCls: 'team',
                styleHtmlContent: true,
                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'About us',
                        items:{
                            iconCls:'team',
                            ui:'plain'
                        }
                    },
                    {
                        xtype: 'panel',
                        html: "<p>Structura Universitatii Tehnice din Cluj-Napoca este complexa si cuprinde treisprezece facultati repartizate in cele doua centre universitare, Cluj-Napoca si Baia-Mare la care se adauga extensiile in localitatile Alba-Iulia, Bistrita, Satu-Mare si Zalau. Oferta educationala, organizata in sistem Bologna, cuprinde programe de licenta, masterat si doctorat, precum si programe de formare continua.Domeniile de studii au o larga cuprindere, de la inginerie la arhitectura, stiinte fundamentale, socio-umane si arte. De asemenea, in cadrul Universitatii Tehnice, functioneaza Departamentul pentru Educatie Continua, Invatamant la Distanta si cu Frecventa Redusa, care organizeaza si deruleaza activitati si programe de educatie continua, cursuri postuniversitare, programe si cursuri de dezvoltare profesională continuă sau bazate pe standarde ocupaţionale.</p>" +
                            "<p>Deplin integrata in viata comunitatii academice internationale, Universitatea Tehnica din Cluj-Napoca este preocupata de schimbul international de valori stiintifice, iar aceasta tendinta se regaseste in cele peste 200 de acorduri de colaborare interuniversitara, sau in numarul mare de mobilitati ale studentilor. Deschiderea în continuare spre spaţiul european si mondial al învăţământului şi cercetării printr-un proces statornic de internaţionalizare reprezinta unul dintre obiectivele majore ale universitatii.</p>" +
                            "<p>Cercetarea este, alături de educaţie, principala prioritate a Universităţii Tehnice din Cluj-Napoca. În toate facultăţile universităţii fiinţează structuri de cercetare, de la colective, grupuri şi laboratoare, până la centre şi platforme de cercetare. Performanţa ancorată în perspectiva mediului socio – economic, vizibilitatea şi cooperarea internaţională, precum şi noutatea ştiinţifică şi interdisciplinaritatea sunt câteva dintre caracteristicile mediului de cercetare din Universitatea Tehnică din Cluj-Napoca.</p>" +
                            "<p>Domeniile abordate sunt într-o gamă întinsă de cuprindere, de la inginerie, cea mai larg reprezentată, la ştiintele fundamentale, ştiinţe socio-umane sau arte. Direcţiile de cercetare deschise sunt orientate pe priorităţile şi perspectivele pe plan mondial: de la tehnologia informaţiei şi comunicaţii, la energii regenerabile şi ecologie, de la superconductivitate, spintronică şi nanomateriale, la management şi robotică, de la mecatronică şi inginerie electrica, la autovehiculul şi locuinţa viitorului ori la urbanism si societate.</p>" +
                            "<p>Universitatea Tehnica din Cluj-Napoca se caracterizeaza prin dinamism in spirit si actiune, fiind calata pe exigentele internationale ale timpurilor noastre si urmarind incadrarea continua intre acele institutii academice cu traditii si valori care conduc la prosperitate si progres in societate.</div>"
                    }
                ]
            }
        ]
    }
});
