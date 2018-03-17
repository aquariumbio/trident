Search.setIndex({docnames:["developer/_autosummary/pydent.aqhttp","developer/_autosummary/pydent.aqsession","developer/_autosummary/pydent.base","developer/_autosummary/pydent.exceptions","developer/_autosummary/pydent.interfaces","developer/_autosummary/pydent.models","developer/_autosummary/pydent.relationships","developer/api_notes","developer/api_reference","developer/contributing","developer/tests","index","user/examples","user/installation"],envversion:51,filenames:["developer/_autosummary/pydent.aqhttp.rst","developer/_autosummary/pydent.aqsession.rst","developer/_autosummary/pydent.base.rst","developer/_autosummary/pydent.exceptions.rst","developer/_autosummary/pydent.interfaces.rst","developer/_autosummary/pydent.models.rst","developer/_autosummary/pydent.relationships.rst","developer/api_notes.rst","developer/api_reference.rst","developer/contributing.rst","developer/tests.rst","index.rst","user/examples.rst","user/installation.rst"],objects:{"":{pydent:[8,0,0,"-"]},"pydent.aqhttp":{AqHTTP:[0,1,1,""]},"pydent.aqhttp.AqHTTP":{_disallow_null_in_json:[0,2,1,""],_login:[0,3,1,""],_request_to_json:[0,2,1,""],clear_history:[0,3,1,""],create_session_json:[0,2,1,""],fix_remember_token:[0,2,1,""],get:[0,3,1,""],post:[0,3,1,""],put:[0,3,1,""],request:[0,3,1,""],url:[0,4,1,""]},"pydent.aqsession":{AqSession:[1,1,1,""]},"pydent.aqsession.AqSession":{current_user:[1,4,1,""],interactive:[1,5,1,""],logged_in:[1,3,1,""],login:[1,4,1,""],model_interface:[1,3,1,""],models:[1,4,1,""],set_timeout:[1,3,1,""],url:[1,4,1,""],utils:[1,4,1,""]},"pydent.base":{ModelBase:[2,1,1,""],ModelRegistry:[2,1,1,""]},"pydent.base.ModelBase":{"interface":[2,5,1,""],_check_for_session:[2,3,1,""],_dump:[2,3,1,""],_fullfill:[2,3,1,""],_relations_to_json:[2,3,1,""],_to_dict:[2,3,1,""],append_to_many:[2,3,1,""],connect_to_session:[2,3,1,""],create_from_json:[2,3,1,""],create_schema_instance:[2,3,1,""],dumps:[2,3,1,""],find:[2,5,1,""],find_callback:[2,3,1,""],get_relationships:[2,3,1,""],get_schema_class:[2,3,1,""],load:[2,5,1,""],no_getter:[2,3,1,""],patch:[2,3,1,""],patch_with_self:[2,3,1,""],relationships:[2,4,1,""],reload:[2,3,1,""],session:[2,4,1,""],where:[2,5,1,""],where_callback:[2,3,1,""]},"pydent.base.ModelRegistry":{get_model:[2,2,1,""],mro:[2,3,1,""]},"pydent.exceptions":{AquariumModelError:[3,6,1,""],TridentJSONDataIncomplete:[3,6,1,""],TridentLoginError:[3,6,1,""],TridentModelNotFoundError:[3,6,1,""],TridentRequestError:[3,6,1,""],TridentTimeoutError:[3,6,1,""]},"pydent.exceptions.AquariumModelError":{with_traceback:[3,3,1,""]},"pydent.exceptions.TridentJSONDataIncomplete":{errno:[3,4,1,""],filename2:[3,4,1,""],filename:[3,4,1,""],strerror:[3,4,1,""],with_traceback:[3,3,1,""]},"pydent.exceptions.TridentLoginError":{errno:[3,4,1,""],filename2:[3,4,1,""],filename:[3,4,1,""],strerror:[3,4,1,""],with_traceback:[3,3,1,""]},"pydent.exceptions.TridentModelNotFoundError":{with_traceback:[3,3,1,""]},"pydent.exceptions.TridentRequestError":{errno:[3,4,1,""],filename2:[3,4,1,""],filename:[3,4,1,""],strerror:[3,4,1,""],with_traceback:[3,3,1,""]},"pydent.exceptions.TridentTimeoutError":{errno:[3,4,1,""],filename2:[3,4,1,""],filename:[3,4,1,""],strerror:[3,4,1,""],with_traceback:[3,3,1,""]},"pydent.interfaces":{ModelInterface:[4,1,1,""],SessionInterface:[4,1,1,""],UtilityInterface:[4,1,1,""]},"pydent.interfaces.ModelInterface":{"new":[4,3,1,""],_post_json:[4,3,1,""],all:[4,3,1,""],array_query:[4,3,1,""],find:[4,3,1,""],find_by_name:[4,3,1,""],get:[4,3,1,""],load:[4,3,1,""],model_name:[4,4,1,""],patch:[4,3,1,""],where:[4,3,1,""]},"pydent.interfaces.UtilityInterface":{batch_operations:[4,3,1,""],compatible_items:[4,3,1,""],create_object_type:[4,3,1,""],create_operation_type:[4,3,1,""],create_plan:[4,3,1,""],create_sample_type:[4,3,1,""],estimate_plan_cost:[4,3,1,""],job_debug:[4,3,1,""],replan:[4,3,1,""],set_operation_status:[4,3,1,""],submit_plan:[4,3,1,""],unbatch_operations:[4,3,1,""],update_code:[4,3,1,""]},"pydent.models":{Account:[5,1,1,""],AllowableFieldType:[5,1,1,""],Budget:[5,1,1,""],Code:[5,1,1,""],Collection:[5,1,1,""],DataAssociation:[5,1,1,""],FieldType:[5,1,1,""],FieldValue:[5,1,1,""],Group:[5,1,1,""],Invoice:[5,1,1,""],Item:[5,1,1,""],Job:[5,1,1,""],JobAssociation:[5,1,1,""],Library:[5,1,1,""],ObjectType:[5,1,1,""],Operation:[5,1,1,""],OperationType:[5,1,1,""],Plan:[5,1,1,""],PlanAssociation:[5,1,1,""],Sample:[5,1,1,""],SampleType:[5,1,1,""],Upload:[5,1,1,""],User:[5,1,1,""],UserBudgetAssociation:[5,1,1,""],Wire:[5,1,1,""]},"pydent.models.Account":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.AllowableFieldType":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Budget":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Code":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Collection":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.DataAssociation":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.FieldType":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],find_field_parent:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],initialize_field_value:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.FieldValue":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],choose_item:[5,3,1,""],compatible_items:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],find_field_parent:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],incoming_wires:[5,4,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],outgoing_wires:[5,4,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],set_field_type:[5,3,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Group":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Invoice":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Item":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],make:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Job":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.JobAssociation":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Library":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],code:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_code_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.ObjectType":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],save:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Operation":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],add_to_field_value_array:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],field_value:[5,3,1,""],field_value_array:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],init_field_values:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],set_field_value:[5,3,1,""],set_field_value_array:[5,3,1,""],show:[5,3,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.OperationType":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],code:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_code_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Plan":{"delete":[5,3,1,""],"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],add_operation:[5,3,1,""],add_operations:[5,3,1,""],append_to_many:[5,3,1,""],check_fields:[5,3,1,""],check_io:[5,3,1,""],check_wires:[5,3,1,""],clear_messages:[5,3,1,""],connect_to_session:[5,3,1,""],copy:[5,3,1,""],create:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],estimate_cost:[5,3,1,""],find:[5,5,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],log:[5,3,1,""],mark_leaves:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],replan:[5,3,1,""],save:[5,3,1,""],session:[5,4,1,""],show:[5,3,1,""],submit:[5,3,1,""],to_save_json:[5,3,1,""],validate:[5,3,1,""],warning:[5,3,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.PlanAssociation":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Sample":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],identifier:[5,4,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],save:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.SampleType":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],save:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Upload":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.User":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.UserBudgetAssociation":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.models.Wire":{"interface":[5,3,1,""],_check_for_session:[5,3,1,""],_dump:[5,3,1,""],_fullfill:[5,3,1,""],_relations_to_json:[5,3,1,""],_to_dict:[5,3,1,""],append_to_many:[5,3,1,""],connect_to_session:[5,3,1,""],create_from_json:[5,3,1,""],create_schema_instance:[5,3,1,""],dumps:[5,3,1,""],find:[5,3,1,""],find_callback:[5,3,1,""],get_relationships:[5,3,1,""],get_schema_class:[5,3,1,""],load:[5,3,1,""],no_getter:[5,3,1,""],patch:[5,3,1,""],patch_with_self:[5,3,1,""],relationships:[5,4,1,""],reload:[5,3,1,""],session:[5,4,1,""],show:[5,3,1,""],where:[5,3,1,""],where_callback:[5,3,1,""]},"pydent.relationships":{HasMany:[6,1,1,""],HasManyGeneric:[6,1,1,""],HasManyThrough:[6,1,1,""],HasMixin:[6,1,1,""],Many:[6,1,1,""],One:[6,1,1,""]},"pydent.relationships.HasMany":{_add_to_schema:[6,3,1,""],_validate:[6,3,1,""],_validate_missing:[6,3,1,""],context:[6,4,1,""],deserialize:[6,3,1,""],fail:[6,3,1,""],get_value:[6,3,1,""],root:[6,4,1,""],schema:[6,4,1,""],serialize:[6,3,1,""],set_ref:[6,3,1,""]},"pydent.relationships.HasManyGeneric":{_add_to_schema:[6,3,1,""],_validate:[6,3,1,""],_validate_missing:[6,3,1,""],context:[6,4,1,""],deserialize:[6,3,1,""],fail:[6,3,1,""],get_value:[6,3,1,""],root:[6,4,1,""],schema:[6,4,1,""],serialize:[6,3,1,""],set_ref:[6,3,1,""]},"pydent.relationships.HasManyThrough":{_add_to_schema:[6,3,1,""],_validate:[6,3,1,""],_validate_missing:[6,3,1,""],context:[6,4,1,""],deserialize:[6,3,1,""],fail:[6,3,1,""],get_value:[6,3,1,""],root:[6,4,1,""],schema:[6,4,1,""],serialize:[6,3,1,""],set_ref:[6,3,1,""]},"pydent.relationships.HasMixin":{set_ref:[6,3,1,""]},"pydent.relationships.Many":{_add_to_schema:[6,3,1,""],_validate:[6,3,1,""],_validate_missing:[6,3,1,""],context:[6,4,1,""],deserialize:[6,3,1,""],fail:[6,3,1,""],get_value:[6,3,1,""],root:[6,4,1,""],schema:[6,4,1,""],serialize:[6,3,1,""]},"pydent.relationships.One":{_add_to_schema:[6,3,1,""],_validate:[6,3,1,""],_validate_missing:[6,3,1,""],context:[6,4,1,""],deserialize:[6,3,1,""],fail:[6,3,1,""],get_value:[6,3,1,""],root:[6,4,1,""],schema:[6,4,1,""],serialize:[6,3,1,""]},pydent:{aqhttp:[0,0,0,"-"],aqsession:[1,0,0,"-"],base:[2,0,0,"-"],exceptions:[3,0,0,"-"],interfaces:[4,0,0,"-"],models:[5,0,0,"-"],relationships:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","classmethod","Python class method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:method","4":"py:attribute","5":"py:classmethod","6":"py:exception"},terms:{"08t10":12,"09t20":12,"0x10c3b7620":12,"0x10c3b76a8":12,"29t07":12,"boolean":[0,1,7],"case":[1,5,6,7],"class":[0,1,2,4,5,6,7,9,12],"default":[0,5,6,7,9],"function":[0,1,2,4,5,6,7,12],"import":[11,12,13],"int":[0,7],"long":[3,10,12],"new":[2,4,5,7,9,10,11,12],"null":[0,3],"return":[0,1,2,3,4,5,6,7,9,10,12],"short":[7,12],"static":[0,2],"super":7,"throw":[0,5,9,12],"true":[0,5,12],"try":12,"var":7,"while":[5,9],And:12,But:[7,9],For:[2,5,6,7,9,10,12],IDE:9,NLS:12,One:[5,6,7],That:13,The:[2,5,6,7,9],There:[3,7,10,11],These:[5,6,9],Use:7,Used:[2,5],Uses:6,Using:[2,11],With:11,__aqhttp:1,__init__:[7,9,12],__name__:4,__set_field_attr:6,__traceback__:3,_add_to_schema:6,_check_for_sess:[2,5],_disallow_null_in_json:0,_dump:[2,5],_fullfil:[2,5],_h2:12,_hdac4_split_part1:12,_login:0,_post_json:4,_relations_to_json:[2,5],_request_to_json:0,_to_dict:[2,5],_valid:6,_validate_miss:6,abl:[1,4,13],about:[7,9],abov:5,access:[0,1,2,4,7],accessor:[5,6],accomplish:2,account:5,add:[5,7,11,12],add_oper:[5,11,12],add_schema:[2,5,6,7],add_to_field_value_arrai:5,add_to_input_arrai:12,added:5,adding:[2,6],addit:[0,5],aft_stype_and_objtyp:5,against:10,alia:[0,4,5],all:[1,4,5,7,9,10,13],all_rel:[7,12],allow:4,allow_non:0,allowable_field_typ:[5,12],allowable_field_type_id:12,allowablefieldtyp:5,along:[5,7],alreadi:[2,5,7],also:[5,7,9,11,12],alwai:[2,5,7],ambigu:3,ani:[7,9,13],anoth:6,anyth:9,anywher:1,api:1,api_kei:0,append:[2,5],append_to_mani:[2,5],appli:6,aqhttp:[1,4,7,9,10],aqsess:[2,4,7,9,10,11,12],aquairum_url:1,aquarium:[0,1,2,3,4,5,6,7,10],aquarium_url:[0,1,4,10],aquariummodelerror:3,arbitrari:[0,4],arg:[2,3,4,5,6],argument:[0,2,5,7],aris:7,arrai:5,array_queri:4,assert:[7,12],associ:[1,2,5,6],attach:[4,7],attempt:7,attibut:6,attr:6,attribut:[2,5,6,7,12],attributeerror:3,authent:1,author:6,author_id:6,autocomplet:5,autogener:9,autom:9,automat:[5,7,12],avail:[1,7,11,12],avoid:[4,7,9],base:[0,1,3,4,5,6,7],baseclass:[2,7,10],basestr:6,basi:13,basic:11,batch:4,batch_oper:4,becaus:5,been:[7,10],befor:[0,5,9],being:0,belong:6,below:[5,7,9,11,13],better:10,between:[4,5,7],biofab:11,bit:7,book:6,breakdown:9,budget:[4,5,11,12],build:6,built:[6,9],buri:6,bxb1:12,bypass:9,call:[4,5,6,7,12],callabl:[6,7],callback:[2,5,6,7,12],can:[0,1,2,5,7,9,11,12,13],cannot:0,capac:10,captur:5,chang:[1,2,5,6,9,11],check:[5,11],check_field:5,check_io:5,check_wir:5,checkout:11,child_item_id:12,child_sample_id:12,choic:5,choose_item:5,classmethod:[1,2,5],clear:[0,5,7],clear_histori:[0,7],clear_messag:5,code:[3,4,5,9,11],collabor:11,collect:5,column:12,com:[10,13],combin:0,command:[9,13],commit:9,common:9,compat:[4,5],compatible_item:[4,5],complex:5,comprehens:[10,12],config:10,conftest:10,connect:[0,1,2,3,4,5,11,12],connect_to_sess:[2,5,11,12],connecttimeout:3,consid:[1,6],consist:[5,11],constructor:[2,5],contain:[0,2,3,4,5,7,9,10,13],content:11,context:6,contribut:11,control:7,convient:10,copi:[4,5],correct:3,correctli:9,cost:[4,5,7,11,12],cost_model:5,could:3,cover:10,coverag:11,creat:[1,2,4,5,9,11,12,13],create_from_json:[2,5],create_object_typ:4,create_operation_typ:4,create_plan:4,create_sample_typ:4,create_schema_inst:[2,5],create_session_json:0,created_at:12,createinterfac:4,creation:9,credenti:[1,3],criteria:4,crpos0:12,current:[1,9],current_us:[1,11,12],custom:[0,7],cut:7,damag:[0,4],data:[0,2,3,4,5,6,7,11],dataassoci:5,databas:5,debug:4,dec:7,decor:[2,7],def:[7,9],defin:[0,1,4,5,6,7,10],definit:[5,7],delet:5,depend:[2,9,10,13],deploi:12,describ:9,descript:12,deseri:[5,6,11],destin:[5,12],dev:9,develop:[9,11],dict:[0,2,5,6,7],dictionari:[2,5,6,7],difficult:10,direct:7,directli:4,directori:[9,13],dna:12,docsrc:9,docstr:9,document:[5,11],doe:[1,2,5,6,7],doubl:12,down:[1,11],download:13,dump:[2,5,7,12],dump_onli:5,dure:5,dynam:2,dynamicschema:[2,5],edit:11,egg:13,either:5,empti:[5,7],endpoint:[5,10],ensur:7,enter:12,entri:[1,9],environ:9,equal:5,equival:7,errno:3,error:[0,2,3,5,9],essenti:9,establish:[4,6,11],estim:[4,5,7,11,12],estimate_cost:[5,11,12],estimate_plan_cost:4,etc:[0,1,4,6,7],even:6,exactli:7,exampl:[4,5,6,7,11],except:[0,2,4,5,6,9,12],exist:[2,5],expect:[5,7,10],explan:7,explicit:5,explicitli:7,extract:12,extract_op:12,extract_typ:12,fail:[6,7],fake:11,fake_sess:10,fakeweb:10,fals:[0,4,5],featur:2,field:[2,4,5,6,11],field_extens:6,field_nam:[6,7],field_typ:[5,12],field_type_id:12,field_valu:[5,12],field_value_arrai:5,fieldmixin:5,fieldnam:7,fieldtyp:[5,7,12],fieldvalu:[5,12],file:9,filenam:3,filename2:3,filter:5,find:[1,2,3,4,5,6,7,11],find_by_nam:[4,7,12],find_callback:[2,5],find_field_par:5,first:[5,10],fix:0,fix_remember_token:0,fixtur:10,flp:12,folder:9,follow:[5,7],form:[5,9],format:[0,1,2,5,6,11,12],forward:12,found:[0,1,5,7,9,10],fragment:12,freez:9,from:[0,1,2,4,5,6,7,9,11,12],ftype:5,fullfil:[2,5],futur:1,gabrielfalcao:10,gel:12,gel_op:12,gel_typ:12,gener:[0,1,4,5,9],get:[0,2,4,5,6,7,11,12],get_code_callback:5,get_from_history_ok:[0,4],get_model:2,get_relationship:[2,5],get_schema_class:[2,5],get_valu:6,gibson_op:12,gibson_typ:12,gijo:7,git:[9,13],github:[10,11,13],given:[5,6],govern:9,great:12,group:[4,5,11],handl:[2,3,5],happen:7,harm:7,has:[5,7,10],hasattr:7,hascodemixin:5,hasmani:[6,7,12],hasmanygener:[6,7],hasmanythrough:[6,7],hasmixin:6,hason:[6,7],have:[5,7,10],haven:9,hdac4_split:12,header:[0,1],help:9,helper:[2,5,6],here:[9,11,12],hidden:1,hierarch:2,histori:0,hold:1,hook:9,how:[7,11],howev:1,http:[0,1,4,9,10,13],httpretti:10,iaa1:12,identifi:5,ignor:5,imcomplet:3,implicitli:7,includ:[2,5,7,12],incoming_wir:5,indirectli:0,inform:[0,1,4,7,9,10],inherit:[2,5,7],ini:9,init:[7,9],init_field_valu:5,initi:[0,3,4,5,6,7,9],initialize_field_valu:5,input:[5,12],instal:[10,11],instanc:[0,1,2,4,5,7,9,11,12],instanti:[1,2,5,7,12],instead:0,intellig:2,interact:[1,4,11,12],intercept:10,interfac:[1,2,5,9,11],intermedi:6,interpret:[9,13],invalid:6,invoic:5,isinst:[7,12],isn:7,item:[4,5,12],its:[0,2,5,6,7,9],itself:[1,7],javascript:11,job:[4,5],job_debug:4,job_id:4,jobassoci:5,joe:7,john:5,json:[0,2,3,4,5,10],json_data:[0,2,4,5,12],kei:[5,6],kevin1024:10,klavin:11,klavinslab:13,know:[7,12],kwarg:[0,2,3,4,5,6,7],lab:11,laci:12,lambda:[5,7,12],leaf:5,left:11,level:9,librari:5,like:[1,7,10],list:[1,2,3,4,5,6,7,9,12],list_of_sampl:4,littl:7,live:11,load:[2,4,5,7,12],load_al:5,load_onli:5,local:12,locat:[9,10],log:[1,5],logged_in:1,login:[0,1,3,4,5,7,10,12],low:9,made:7,magicchain:12,mai:[1,3,5,7,11,12],main:[1,7],make:[0,1,2,4,5,7,10,11,12,13],makefil:11,manag:9,mani:[2,5,6,7,10,12],mark:5,mark_leav:5,marshal:[2,5,6,7,10],marshallerbas:[2,5],marshmallow:6,match:5,mean:[7,9],member:[5,11],messag:5,method:[0,1,2,4,5,6,7,9,10],minim:[5,7],misc:4,miscellan:11,miss:6,mixin:6,model:[1,2,3,4,6,10,11],model_arg:[2,5],model_id:[2,4,5],model_interfac:[1,7],model_nam:[1,2,4,5],modelbas:[2,5,6,7],modelinterfac:[4,7],modelnam:1,modelregistri:2,modul:[0,1,2,4,5,7,9],monkeypatch:10,more:[5,7,9],most:[7,9,10],move:13,mro:2,msg:5,multipl:[1,5],must:7,mylogin:7,mynam:7,myplan:[7,11,12],myprim:[2,12],name:[1,2,4,5,6,7,11,12],name_of_depend:9,nat:12,necessari:[1,5,11,13],need:7,nest:[5,6],nice:[2,5],no_gett:[2,5],none:[0,1,2,4,5,6,7,12],note:[10,11],noth:[2,5],notic:7,now:[7,9,13],number:7,nurseri:[10,12],obj:6,object:[0,1,3,4,5,6,7],object_typ:[4,5],object_type_id:[4,5],objecttyp:5,obscur:0,occur:[3,7],offici:[9,13],often:9,ones:9,onli:[0,4,5,7],open:[11,12,13],oper:[4,5,11,12],operation_id:4,operation_typ:[4,5,7,12],operation_type_id:5,operation_type_nam:6,operationtyp:[5,6,11,12],opt:[4,12],option:[1,2,5,10],order:[2,7,11,12],order_prim:[11,12],org:[9,10,13],organ:11,other:[6,7],out:11,outgoing_wir:5,output:12,overrid:5,own:6,packag:[9,13],param:[2,5,6,7,9,12],paramet:[0,1,2,4,5,6,7],parent:[5,6],parent_class:5,parent_id:[5,6],part:10,particular:[4,7,9],pass:[6,7],password:[0,1,4,10,12],password_digest:0,patch:[2,4,5],patch_with_self:[2,5],path:[0,4,13],pcag:12,pcr:12,pcr_op:12,pcr_type:12,peopl:9,per:13,perform:[0,1,6],piec:12,pip:[9,13],pipenv:11,plan:[1,4,5,7,11],plan_id:[4,11,12],plan_valid:5,planassoci:5,planvalid:5,plasmid:12,plate:12,pleas:[9,11],plu:9,point:[1,9],posit:7,posix:3,possess:5,possibl:7,post:[0,4,7],post_respons:4,potenti:[4,7,10],pprint:12,pre:[5,7],precondit:5,preferred_field_type_id:5,preferred_operation_type_id:5,prevent:[4,9],previous:[0,7],primer:[2,11,12],primer_typ:2,print:[2,5,7,11,12],prkl1573:12,prkl1708:12,prkl1927:12,prkl1928:12,prkl1929:12,prkl1930:12,prkl506:12,prkl744:12,problem:6,process:0,product:[10,12],project:[5,9,13],prompt:1,properli:[3,7],properti:5,protocol:[5,12],pull:[6,9,11],purifi:12,purify_op:12,purify_typ:12,put:[0,7],pydent:[7,9,11,12,13],pytest:[9,10],python3:13,python:[9,11,13],queri:4,rais:[0,2,5,6,9,12],rather:7,raw:[0,4],reason:7,recommend:[9,13],record:10,ref:[6,7],ref_model:6,refer:[2,5,6,11],regard:9,registri:2,relat:[2,5,6,7,12],relationship:[2,5,11],releas:[11,13],reload:[2,5],rememb:0,renam:6,replac:10,replan:[4,5],represent:5,request:[0,1,2,3,4,5,10],request_histori:7,requestexcept:3,requir:[5,6,7,9,11],resolut:2,respond:3,respons:3,respositori:11,rest:4,result:[0,5,6,9],retriev:[4,5,7],reveal:4,revers:12,role:5,root:[6,9,13],roughli:4,rout:5,rubi:10,run:[4,9,10,11,12,13],samlpetyp:7,sampel_type_id:7,sampl:[2,4,5,7,11,12],sample_id:[4,5],sample_typ:[2,4,5,7,12],sample_type_id:[2,5,6,7,12],sampletyp:[2,5,6,7,11,12],satisfi:[2,5],save:[0,2,4,5,7,11,12],save_plan:7,schema:[2,5,6,7],schema_arg:[2,5],schema_kwarg:[2,5],script:11,search:6,second:[0,3],secret:10,see:[2,5,7,9,13],self:[2,3,4,5,7,9],selfdict:2,sensit:[0,4],sent:0,sequenc:12,serial:[5,6,11],server:[0,3,4,5,10,11],session1:[1,4],session:[0,1,2,4,5,7,9,10,11,12],sessioninterfac:[0,1,4,9],set:[1,2,3,4,5,6,9,11],set_field_typ:5,set_field_valu:5,set_field_value_arrai:5,set_input:[11,12],set_operation_statu:4,set_output:[11,12],set_ref:6,set_timeout:[1,12],sever:[5,10],shell:[12,13],should:[0,4,5,6,10],show:[5,11,12],similar:10,simpli:6,singl:[5,6],slice:12,softwar:11,some:[2,5,7,9],soon:13,sourc:[0,1,2,3,4,5,6,9,12],special:[2,5,7],specif:[0,4,10],specifi:[5,7],sphinx:9,stabl:9,start:11,statu:[4,5],store:[1,2,7],str:[0,1,2,5,6,7],straightforward:7,strand:12,strerror:3,strict:5,string:[2,5],stuff:13,style:7,subclass:[2,5,6],submiss:5,submit:[4,5,7,11],submit_plan:4,submodul:11,succe:6,sure:[5,7,9],sv40nls1:12,sv40nls2:12,tabl:11,tag:9,take:[10,12],target:6,task:9,templat:[10,12],termin:13,test:11,test_model:10,than:7,thei:9,thi:[0,1,2,3,4,5,6,7,9],those:[7,9],though:10,through:[0,4,6,7,9],thrown:9,time:[0,10],timeout:[0,1],timeout_in_second:1,to_save_json:5,togeth:12,token:0,too:[3,5,12],took:[3,12],tool:[9,13],tox:9,track:7,tradiat:12,transfer:12,trident:[0,1,2,3,4,5,7,9,10],tridentjsondataincomplet:[0,3],tridentloginerror:3,tridentmodelnotfounderror:3,tridentrequesterror:3,tridenttimeouterror:3,turn:0,two:[7,10],type:[0,1,2,4,5,9,11,12],unabl:[0,4],unbatch:4,unbatch_oper:4,unbound:6,unless:9,unnecessari:7,updat:[1,2,4,5,6,9],update_cod:4,updated_at:12,updateinterfac:4,upload:5,urgent:[11,12],url2:12,url:[0,1,7,11,12],usag:11,use:[4,5,6,7,9,10],used:[1,4,5,6,7],user:[0,1,4,5,7],userbudgetassoci:5,usernam:[1,12],uses:7,using:[0,1,2,4,5,6,7,9,10,13],util:[1,5,7,9,10],utilityinterfac:[4,7],valid:[5,6,7,11,12],validationerror:6,valu:[0,3,4,5,6,7,9,11,12],variabl:5,variou:5,vcrpy:10,venv:9,ver:13,verbos:5,veri:10,verifi:3,version:[6,9,10,11],via:[7,13],virtual:9,virtualenv:[9,13],wai:[4,7],want:9,warn:[5,12],well:[2,12],what:7,whatev:7,when:[5,7,9],where:[1,2,4,5,6,7,12],where_callback:[2,5,7],where_using_sess:12,whether:[0,1],which:[0,1,7,9,10,11],wire:[5,12],wires_as_dest:5,wires_as_sourc:5,with_traceback:3,work:11,would:7,wrapper:[7,11],write:[9,10],written:10,www:9,yet:9,you:[7,9,11,12,13],your:[3,9,10,12,13],yourlogin:10,yoursess:7},titles:["pydent.aqhttp","pydent.aqsession","pydent.base","pydent.exceptions","pydent.interfaces","pydent.models","pydent.relationships","Developer Notes","API Reference","Contributing","Tests","Trident: The Aquarium API","Trident Examples","Installation"],titleterms:{IDEs:9,The:11,all:12,api:[8,11],aqhttp:0,aqsess:1,aquarium:11,assembl:12,base:2,basic:12,chain:12,complex:12,connect:10,contribut:9,coverag:[9,10],creat:7,data:12,deseri:[7,12],develop:7,doc:9,document:9,edit:7,environ:13,establish:7,exampl:12,except:3,fake:10,field:[7,12],find:12,from:13,fullfil:7,gibson:12,histori:7,instal:[9,13],interfac:[4,7],live:10,lock:9,log:12,magic:12,make:9,makefil:9,miscellan:12,model:[5,7,12],more:11,nest:12,note:[7,9],onli:12,pipenv:[9,13],pipfil:9,plan:12,pydent:[0,1,2,3,4,5,6],pylint:9,queri:12,read:11,refer:8,relationship:[6,7,12],releas:9,remot:13,request:[7,12],requir:13,serial:[7,12],set:12,some:12,style:9,submit:12,submodul:8,test:[9,10],timeout:12,trident:[11,12,13],usag:12,using:12,work:7}})