
type IVtypeName = 'mobile' | 'email' | 'url' | 'number' | 'chinese' | 'phone' | 'account' | 'name';
interface IVtypeItem { msg: string, reg: RegExp, vaild: (value: string) => boolean };
export const vtype: Record<IVtypeName,IVtypeItem> = {
    mobile: {
        reg: /^1[345789]\d{9}$/,
        msg: '手机号码不正确',
        vaild(value) {
            return this.reg.test(value)
        }
    },
    url: {
        reg: /(http|https):\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/,
        msg: 'url格式错误',
        vaild(value) {
            return this.reg.test(value)
        }
    },
    number: {
        reg: /^[0-9.-]+$/,
        msg: '数值不正确',
        vaild(value) {
            return this.reg.test(value)
        }
    },
    email: {
        msg: '邮件格式错误',
        reg: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
        vaild(value) {
            return this.reg.test(value)
        }
    },
    chinese: {
        msg: '必须为中文',
        reg: /[\u4e00-\u9fa5]/,
        vaild(value) {
            return this.reg.test(value)
        }
    },
    phone: {
        msg: '电话号码不正确',
        reg: /(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/,
        vaild(value) {
            return this.reg.test(value)
        }
    },
    account: {
        msg: '账号不合法',
        reg: /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/,
        vaild(value) {
            return this.reg.test(value)
        }
    },
    name: {
        msg: '姓名不正确',
        reg: /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/,
        vaild(value) {
            return this.reg.test(value)
        }
    }
}
