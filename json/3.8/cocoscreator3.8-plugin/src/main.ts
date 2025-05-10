import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { Asset, Node, Prefab, Sprite, Label, UITransform, Color, Vec2, Vec3 } from 'cc';

interface ComponentData {
    type: string;
    size: { width: number; height: number };
    color: string;
    depth: number;
    pivot: string;
    [key: string]: any;
}

interface NodeData {
    name: string;
    pos: { x: number; y: number };
    scale: { x: number; y: number };
    rotation: number;
    active: boolean;
    components?: ComponentData[];
    children?: NodeData[];
    button?: boolean;
    scrollView?: any;
    grid?: any;
}

export function create(options: { json: string; savePath: string; textureFolder: string; fontFolder: string }) {
    const { json, savePath, textureFolder, fontFolder } = options;
    
    try {
        // 读取 JSON 文件
        const jsonData: NodeData = JSON.parse(readFileSync(json, 'utf-8'));
        
        // 创建根节点
        const rootNode = new Node(jsonData.name);
        
        // 递归创建节点树
        createNodeTree(rootNode, jsonData, textureFolder, fontFolder);
        
        // 创建预制体
        const prefab = new Prefab();
        prefab.data = rootNode;
        
        // 保存预制体
        const prefabPath = join(savePath, `${jsonData.name}.prefab`);
        writeFileSync(prefabPath, JSON.stringify(prefab));
        
        console.log(`Prefab created successfully at ${prefabPath}`);
    } catch (error) {
        console.error('Error creating prefab:', error);
    }
}

function createNodeTree(node: Node, data: NodeData, textureFolder: string, fontFolder: string) {
    // 设置基本属性
    node.setPosition(new Vec3(data.pos.x, data.pos.y, 0));
    node.setScale(new Vec3(data.scale.x, data.scale.y, 1));
    node.angle = data.rotation;
    node.active = data.active;
    
    // 添加组件
    if (data.components) {
        for (const compData of data.components) {
            switch (compData.type) {
                case 'UILabel':
                    createLabelComponent(node, compData, fontFolder);
                    break;
                case 'UISprite':
                    createSpriteComponent(node, compData, textureFolder);
                    break;
                case 'UITexture':
                    createTextureComponent(node, compData, textureFolder);
                    break;
            }
        }
    }
    
    // 递归创建子节点
    if (data.children) {
        for (const childData of data.children) {
            const childNode = new Node(childData.name);
            node.addChild(childNode);
            createNodeTree(childNode, childData, textureFolder, fontFolder);
        }
    }
}

function createLabelComponent(node: Node, data: ComponentData, fontFolder: string) {
    const label = node.addComponent(Label);
    const transform = node.getComponent(UITransform) || node.addComponent(UITransform);
    
    transform.setContentSize(data.size.width, data.size.height);
    label.color = new Color().fromHEX(data.color);
    label.fontSize = data.fontSize;
    label.string = data.text;
    
    if (data.bitmapFont) {
        // 加载位图字体
        const fontPath = join(fontFolder, `${data.bitmapFont}.font`);
        // TODO: 实现字体加载
    }
    
    // 设置其他属性
    if (data.outlineColor && data.outlineWidth) {
        label.enableOutline = true;
        label.outlineColor = new Color().fromHEX(data.outlineColor);
        label.outlineWidth = data.outlineWidth;
    }
}

function createSpriteComponent(node: Node, data: ComponentData, textureFolder: string) {
    const sprite = node.addComponent(Sprite);
    const transform = node.getComponent(UITransform) || node.addComponent(UITransform);
    
    transform.setContentSize(data.size.width, data.size.height);
    sprite.color = new Color().fromHEX(data.color);
    
    if (data.spName && data.atlas) {
        // 加载精灵帧
        const spriteFramePath = join(textureFolder, `${data.atlas}/${data.spName}.spriteFrame`);
        // TODO: 实现精灵帧加载
    }
    
    // 设置九宫格
    if (data.border) {
        sprite.type = Sprite.Type.SLICED;
        sprite.trim = false;
        // TODO: 设置九宫格数据
    }
}

function createTextureComponent(node: Node, data: ComponentData, textureFolder: string) {
    const sprite = node.addComponent(Sprite);
    const transform = node.getComponent(UITransform) || node.addComponent(UITransform);
    
    transform.setContentSize(data.size.width, data.size.height);
    sprite.color = new Color().fromHEX(data.color);
    
    if (data.spName) {
        // 加载纹理
        const texturePath = join(textureFolder, `${data.spName}.texture`);
        // TODO: 实现纹理加载
    }
} 