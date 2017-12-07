
          window.__NEXT_REGISTER_PAGE('/tabs', function() {
            var comp = module.exports=webpackJsonp([7],{262:function(e,t,n){e.exports=n(263)},263:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(264),i=a(l),s=n(266),u=a(s),c=n(38),d=a(c),f="/Users/krista.goralczyk/Projects/concierge/forked/styled-material-components/pages/tabs.js?entry",m=function(e){var t=e.className;return o.default.createElement(d.default,{theme:{primary:"#03A9F4"},__source:{fileName:f,lineNumber:13}},o.default.createElement("div",{className:t,__source:{fileName:f,lineNumber:14}},o.default.createElement("h1",{__source:{fileName:f,lineNumber:15}},"Tabs"),o.default.createElement("h2",{__source:{fileName:f,lineNumber:16}},"Fixed Tabs Default"),o.default.createElement("p",{__source:{fileName:f,lineNumber:17}},"By default the fixed tabs will take an equal width percent of their parent container and use the theme styles."),o.default.createElement(i.default,{__source:{fileName:f,lineNumber:21}},o.default.createElement(u.default,{label:"Tab One",__source:{fileName:f,lineNumber:22}},"First tab content is great"),o.default.createElement(u.default,{label:"Tab Two",__source:{fileName:f,lineNumber:25}},"Tab two has content as well"),o.default.createElement(u.default,{label:"Tab Three",__source:{fileName:f,lineNumber:28}},"Totally tabular")),o.default.createElement("br",{__source:{fileName:f,lineNumber:32}}),o.default.createElement("br",{__source:{fileName:f,lineNumber:33}}),o.default.createElement("h2",{__source:{fileName:f,lineNumber:34}},"Fixed Tabs Custom Styles"),o.default.createElement("p",{__source:{fileName:f,lineNumber:35}},"Tabs can accept props for:"),o.default.createElement("ul",{__source:{fileName:f,lineNumber:38}},o.default.createElement("li",{__source:{fileName:f,lineNumber:39}},"activeBackgroundColor - hexa or rgb string"),o.default.createElement("li",{__source:{fileName:f,lineNumber:40}},"passiveBackgroundColor - hexa or rgb string"),o.default.createElement("li",{__source:{fileName:f,lineNumber:41}},"activeFontColor - hexa or rgb string"),o.default.createElement("li",{__source:{fileName:f,lineNumber:42}},"passiveFontColor - hexa or rgb string"),o.default.createElement("li",{__source:{fileName:f,lineNumber:43}},"showInkbar - default is true, boolean")),o.default.createElement(i.default,{width:"130",activeBackgroundColor:"#b5211e",passiveBackgroundColor:"#df4340",activeFontColor:"#fff",passiveFontColor:"#c2c2c2",showInkbar:!1,__source:{fileName:f,lineNumber:45}},o.default.createElement(u.default,{label:"Tab One",__source:{fileName:f,lineNumber:52}},"First tab content is great"),o.default.createElement(u.default,{label:"Tab Two",__source:{fileName:f,lineNumber:55}},"Tab two has content as well"),o.default.createElement(u.default,{label:"Tab Three",__source:{fileName:f,lineNumber:58}},"Totally tabular"))))};t.default=m},264:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=a(r),l=n(3),i=a(l),s=n(4),u=a(s),c=n(8),d=a(c),f=n(9),m=a(f),b=n(2),p=a(b),h=n(0),_=a(h),v=n(1),g=a(v),N=n(265),x=a(N),k="/Users/krista.goralczyk/Projects/concierge/forked/styled-material-components/src/components/Tabs/Tabs.js",C=(0,p.default)(["\n  position: relative;\n  margin: 0 auto;\n  text-transform: uppercase;\n  width: 100%;\n  color: ",";\n"],["\n  position: relative;\n  margin: 0 auto;\n  text-transform: uppercase;\n  width: 100%;\n  color: ",";\n"]),y=(0,p.default)(["\n  font-family: lato, sans-serif;\n  text-transform: none;\n"],["\n  font-family: lato, sans-serif;\n  text-transform: none;\n"]),w=(0,p.default)([""],[""]),T=g.default.nav(C,function(e){return e.theme.textColors.primary}),E=g.default.div(y),F=function(e){function t(e){(0,i.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));n.setTabWidth=function(){var e=n.props.width||parseInt(n.tabs.getBoundingClientRect().width/n.state.numTabs,10);n.setState({tabWidth:e})},n.updateSelectedIndex=function(e){return n.setState({selectedIndex:e})},n.getSelected=function(e){return n.state.selectedIndex===e};var a=[];h.Children.forEach(e.children,function(e){(0,h.isValidElement)(e)&&a.push(e)});var r=a.length;return n.state={selectedIndex:0,tabs:a,numTabs:r},n}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setTabWidth),this.setTabWidth()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setTabWidth)}},{key:"render",value:function(){var e=this,t=[],n=this.state.tabs.map(function(n,a){var r=e.getSelected(a);return t.push(n.props.children?_.default.createElement(E,{__source:{fileName:k,lineNumber:64}},n.props.children):void 0),(0,h.cloneElement)(n,{key:a,index:a,selected:r,tabWidth:e.state.tabWidth,numTabs:e.state.numTabs,onClick:e.updateSelectedIndex,activeBackgroundColor:e.props.activeBackgroundColor,passiveBackgroundColor:e.props.passiveBackgroundColor,activeFontColor:e.props.activeFontColor,passiveFontColor:e.props.passiveFontColor})});return _.default.createElement(T,{innerRef:function(t){return e.tabs=t},className:"smc-tab-bar",__source:{fileName:k,lineNumber:81}},n,this.props.showInkbar?_.default.createElement(x.default,{numTabs:this.state.numTabs,selectedIndex:this.state.selectedIndex,tabWidth:this.state.tabWidth,__source:{fileName:k,lineNumber:84}}):null,t[this.state.selectedIndex])}}]),t}(h.PureComponent);F.defaultProps={width:void 0,showInkbar:!0};var B=(0,g.default)(F)(w);t.default=B},265:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(0),i=a(l),s=n(1),u=a(s),c=(0,o.default)(["\n  position: relative;\n  bottom: 0;\n  left: ","px;\n  width: ","px;\n  height: 2px;\n  background-color: #000;\n"],["\n  position: relative;\n  bottom: 0;\n  left: ","px;\n  width: ","px;\n  height: 2px;\n  background-color: #000;\n"]),d=u.default.div(c,function(e){return e.selectedIndex*e.tabWidth},function(e){return e.tabWidth}),f=function(e){var t=e.numTabs,n=e.selectedIndex,a=e.tabWidth;return i.default.createElement(d,{className:"smc-tab-bar-scroller",numTabs:t,selectedIndex:n,tabWidth:a,__source:{fileName:"/Users/krista.goralczyk/Projects/concierge/forked/styled-material-components/src/components/Tabs/InkBar.js",lineNumber:14}})};t.default=f},266:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(0),i=a(l),s=n(1),u=a(s),c=(0,o.default)(["",""],["",""]),d=(0,o.default)(["\n  font-family: lato, sans-serif;\n  position: relative;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  display: table-cell;\n  box-sizing: border-box;\n  min-height: 48px;\n  height: 48px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  width: ",";\n  &:hover {\n    opacity: 1;\n  }\n"],["\n  font-family: lato, sans-serif;\n  position: relative;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  display: table-cell;\n  box-sizing: border-box;\n  min-height: 48px;\n  height: 48px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  width: ",";\n  &:hover {\n    opacity: 1;\n  }\n"]),f=(0,o.default)([""],[""]),m=(0,s.css)(c,function(e){return e.selected?e.activeBackgroundColor:e.passiveBackgroundColor}),b=(0,s.css)(c,function(e){return e.selected?e.theme.primary:e.theme.white}),p=(0,s.css)(c,function(e){return e.selected?e.activeFontColor:e.passiveFontColor}),h=(0,s.css)(c,function(e){return e.selected?e.theme.textColors.primary:e.theme.textColors.secondary}),_=u.default.a(d,function(e){return e.activeFontColor&&e.passiveFontColor?p:h},function(e){return e.activeBackgroundColor&&e.passiveBackgroundColor?m:b},function(e){return e.selected?1:.87},function(e){return e.tabWidth}),v=function(e){var t=e.label,n=e.icon,a=e.selected,r=e.onClick,o=e.index,l=e.tabWidth,s=e.activeBackgroundColor,u=e.passiveBackgroundColor,c=e.activeFontColor,d=e.passiveFontColor;return i.default.createElement(_,{className:"smc-tab",onClick:function(){return r(o)},selected:a,tabWidth:l+"px",activeBackgroundColor:s,passiveBackgroundColor:u,activeFontColor:c,passiveFontColor:d,__source:{fileName:"/Users/krista.goralczyk/Projects/concierge/forked/styled-material-components/src/components/Tabs/Tab.js",lineNumber:47}},n||null,t)},g=(0,u.default)(v)(f);t.default=g}},[262]);
            return { page: comp.default }
          })
        