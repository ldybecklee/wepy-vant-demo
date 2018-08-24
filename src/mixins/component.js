import wepy from 'wepy';

export default class ComponentMixin extends wepy.mixin {
  
  prop_options = {
    options: {
      type: Object
    }
  }
  
  onLoad() {  
    // 增加使用options参数进行props传值，
    // 进行value类型验证
    // options对象内的值会覆盖掉props上面的值
    for(var key in this.options) {
      var type = this.options[key].constructor;
      if(typeof this.props[key]=='undefined') {
        continue;
      }
      if(type!==this.props[key].type[0]) {
        continue;
      }
      this[key] = this.options[key];
    }
    this.$apply();
  }
  
}
