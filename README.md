# Ureanl_Puerts_FGUI

整合 fgui 与 puerts的

## 版本2021.8.24
- 基于腾讯大神puerts_unreal_demo:https://github.com/chexiongsheng/puerts_unreal_demo

- 和谷主最新版FairyGUI:https://github.com/fairygui/FairyGUI-unreal

## 文件
./Puerts 存放ts的文件夹(原来TS的工程属性就一个tsconfig.json)
./FGUI 存放FairyGUI工程的文件夹

## 启动
- UIMap 使用蓝图创建了UI,入口在LevelBlueprint

- TSMap 使用了Puerts复刻了上面创建UI的流程,入口也在LevelBlueprint

---

试用下手动绑定,是可以的,手动绑定了一个鼠标显示的函数在UEBinding.cpp

没什么特别要注意的,别用错版本即可,我用错他们的开发版搞了一天各种问题



