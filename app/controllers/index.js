import Ember from 'ember';

export default Ember.Controller.extend({
  chartColumns: ['lorem','ipsum','dolor','sit','amet','consectetur','adipisicing'],
  chartContent: Ember.computed.map('chartColumns',(key)=>{
    return {
      name: key,
      value: Math.floor(Math.random()*500)
    }
  })
});
