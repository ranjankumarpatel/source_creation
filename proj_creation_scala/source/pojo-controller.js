app.controller('$pojo Ctrl', function (_scope, $pojo_lower _findAllFactory, $pojo_lower _findByIdFactory,$pojo_lower _insert$pojo Factory,$pojo_lower _update$pojo Factory) {

    _scope.new$pojo  = {

    };

    _scope.findAll = function () {
        $pojo_lower _findAllFactory.query({

        }, function (data) {
            _scope.$pojo_lower s = data;

        });
    }


    _scope.findById = function ($genId) {
        $pojo_lower _findByIdFactory.get({
            "$genId": $genId
        }, function (data) {
            _scope.$pojo_lower  = data;
        });
    }


    _scope.insert$pojo = function () {

        if (formSubmit("insert$pojo Form")) {
            $pojo_lower _insert$pojo Factory.save(_scope.new$pojo, function (data) {
                alertMessage("success","success", "$pojo  inserted successfully");


            }, function (error) {
                alertMessage("error", "$pojo  Insertion error", "Please try again");
            })
            _("#insert$pojo FormModal").modal("hide");
        }
    };

    _('#insert$pojo FormModal').on('hidden.bs.modal', function () {
        _(this).find('form').trigger('reset');
        _('select').val('');
    })

    _scope.edit$pojo = function ($pojo_lower) {
        _scope.update$pojo = cloneJson($pojo_lower);
        // _scope.statementData = statement;
    };


    _scope.update$pojo = function () {

        if (formSubmit("update$pojo Form")) {
            $pojo_lower _update$pojo Factory.save(_scope.update$pojo, function (data) {
                alertMessage("success","success", "$pojo  updated successfully");


            }, function (error) {
                alertMessage("error","$pojo  Updation error","Please try again");
            })
            _("#update$pojo FormModal").modal("hide");
        }
    };

    $code

});
