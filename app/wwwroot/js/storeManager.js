// TODO モジュール化をうまくする
(function (window) {
    _data = null;

    this.save = function () { 

    };

    this.update = function () {

    };

    this.get = function (key = null) {
        if (key === null) {
            return getAll();
        }

    };

    function _load() {
        if (_data !== null) return;

        // TODO 読み込む
    }

    function _get() {

    }

    window.StoreManager = this;
})(window);
