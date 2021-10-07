<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrestadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestadores', function (Blueprint $table) {
            $table->id('id_prestador');
            $table->string('nome_prestador');
            $table->string('email_prestador');
            $table->string('senha_prestador',500);
            $table->integer('telefone');
            $table->binary('curriculo');
            $table->integer('cpf_prestador');
            $table->boolean('status_prestador');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prestadores');
    }
}
