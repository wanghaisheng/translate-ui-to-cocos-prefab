import { _decorator, Component, Node, Button, EditBox } from 'cc';
import { create } from '../main';

const { ccclass, property } = _decorator;

@ccclass('PrefabCreatorPanel')
export class PrefabCreatorPanel extends Component {
    @property(EditBox)
    jsonPath: EditBox = null!;

    @property(EditBox)
    savePath: EditBox = null!;

    @property(EditBox)
    textureFolder: EditBox = null!;

    @property(EditBox)
    fontFolder: EditBox = null!;

    @property(Button)
    createButton: Button = null!;

    start() {
        // 初始化默认路径
        this.savePath.string = 'assets/';
        this.textureFolder.string = 'assets/';
        this.fontFolder.string = 'assets/';

        // 绑定按钮事件
        this.createButton.node.on(Button.EventType.CLICK, this.onCreateClicked, this);
    }

    onDestroy() {
        this.createButton.node.off(Button.EventType.CLICK, this.onCreateClicked, this);
    }

    async onCreateClicked() {
        try {
            await create({
                json: this.jsonPath.string,
                savePath: this.savePath.string,
                textureFolder: this.textureFolder.string,
                fontFolder: this.fontFolder.string
            });
        } catch (error) {
            console.error('Error creating prefab:', error);
        }
    }
} 